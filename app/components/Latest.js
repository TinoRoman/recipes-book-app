import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Colors } from '../constants/constants';
import { Link } from 'react-router';
import RecipeList from './RecipesList';

class Latest extends Component {
    render() {
        let { recipes, deleteRecipe } = this.props.route;
        let ordered = recipes.sort((a, b) => b.date - a.date);
        return (
            <RecipeList
                items={ordered}
                deleteRecipe={deleteRecipe}
                canEdit={true}
                canDelete={true}
            />
        );
    }
}

export default Latest;
