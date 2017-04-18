import { API } from '../constants/constants';

export const loadRecipes = () => async (dispatch, getState) => {
    let response = await fetch(`${API}/recipes`);
    dispatch({ type: 'RECIPES_LOADED', data: JSON.parse(await response.text()) });
};

export const deleteRecipe = id => async (dispatch, getState) => {
    let response = await fetch(`${API}/recipes/${id}`, { method: 'DELETE' });
    if (response.ok) dispatch({ type: 'RECIPE_DELETED', data: id });
};
