import React, { Component, PropTypes } from 'react';
import Recipe from './Recipe';

class RecipesList extends Component {
    render() {
        let { items, deleteRecipe, canEdit, canDelete } = this.props;
        return (
            <div>
                {items.map((item, index) => (
                    <Recipe
                        key={index}
                        deleteRecipe={deleteRecipe}
                        canEdit={canEdit}
                        canDelete={canDelete}
                        {...item}
                    />
                ))}
            </div>
        );
    }
}

Recipe.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    canEdit: PropTypes.bool,
    deleteRecipe: PropTypes.func
};

export default RecipesList;
