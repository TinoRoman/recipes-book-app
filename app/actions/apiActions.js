import { API, ActionTypes } from '../constants/constants';
import { browserHistory } from 'react-router';

export const loadRecipes = () => async (dispatch, getState) => {
    let response = await fetch(`${API}/recipes`);
    dispatch({
        type: ActionTypes.RECIPES_LOADED,
        data: { recipes: JSON.parse(await response.text()) }
    });
};

export const deleteRecipe = id => async (dispatch, getState) => {
    let response = await fetch(`${API}/recipes/${id}`, { method: 'DELETE' });
    if (response.ok) dispatch({ type: ActionTypes.RECIPE_DELETED, data: { id } });
};

export const addNewRecipe = (name, description) => async (dispatch, getState) => {
    let response = await fetch(`${API}/recipes`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            description
        })
    });
    if (response.ok) {
        let recipe = JSON.parse(await response.text());
        dispatch({ type: ActionTypes.RECIPE_ADDED, data: { recipe } });
        browserHistory.push('/');
    }
};

export const updateRecipe = (name, description, id) => async (dispatch, getState) => {
    let response = await fetch(`${API}/recipes/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            name,
            description
        })
    });
    if (response.ok) {
        let recipe = JSON.parse(await response.text());
        dispatch({ type: ActionTypes.RECIPE_UPDATED, data: { recipe } });
        browserHistory.push('/');
    }
};
