import { ActionTypes } from '../constants/constants';

const defaultState = {
    all: [],
    latest: []
};

const recipes = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.RECIPES_LOADED: {
            return Object.assign({}, state, {
                all: action.data.recipes,
                latest: action.data.recipes.filter(_ => _.latest)
            });
        }

        case ActionTypes.RECIPE_DELETED: {
            const _id = action.data.id;
            return Object.assign({}, state, {
                all: state.all.filter(_ => _.id !== _id),
                latest: state.latest.filter(_ => _.id !== _id)
            });
        }

        case ActionTypes.RECIPE_ADDED: {
            return Object.assign({}, state, {
                all: [...state.all, action.data.recipe],
                latest: [...state.latest, action.data.recipe]
            });
        }

        case ActionTypes.RECIPE_UPDATED: {
            let _recipe = action.data.recipe;
            let prev = state.all.find(_ => _.id === _recipe.id && _.latest);
            return Object.assign({}, state, {
                all: [
                    ...state.all.filter(_ => _ !== prev),
                    Object.assign({}, prev, {
                        latest: false
                    }),
                    _recipe
                ],
                latest: [...state.latest.filter(_ => _.id !== _recipe.id), _recipe]
            });
        }

        default:
            return state;
    }
};

export default recipes;
