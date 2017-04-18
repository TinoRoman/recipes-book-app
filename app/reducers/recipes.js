const defaultState = {
    all: [],
    latest: []
};

const recipes = (state = defaultState, action) => {
    switch (action.type) {
        case 'RECIPES_LOADED': {
            return Object.assign({}, state, {
                all: action.data,
                latest: action.data.filter(_ => _.latest)
            });
        }

        case 'RECIPE_DELETED': {
            const _id = action.data;
            return Object.assign({}, state, {
                all: state.all.filter(_ => _.id !== _id),
                latest: state.latest.filter(_ => _.id !== _id)
            });
        }

        default:
            return state;
    }
};

export default recipes;
