import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Colors } from '../constants/constants';
import { Link } from 'react-router';
import RecipeList from './RecipesList';
import EditRecipe from './EditRecipe';

const styles = {};

class ViewRecipes extends Component {
    render() {
        let { recipes, updateRecipe } = this.props.route;
        let id = this.props.routeParams.id;
        let previous = recipes
            .filter(_ => _.id === id && !_.latest)
            .sort((a, b) => b.date - a.date);
        let current = recipes.find(_ => _.id === id && _.latest);
        return (
            <div>
                {current &&
                    <EditRecipe
                        id={current.id}
                        name={current.name}
                        description={current.description}
                        editRecipe={updateRecipe}
                    />}
                <RecipeList items={previous} canEdit={false} canDelete={false} />;
            </div>
        );
    }
}

export default ViewRecipes;
