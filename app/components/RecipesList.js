import React, { Component, PropTypes } from 'react';
import Recipe from './Recipe';
import AddBar from './AddBar';

const styles = {
    container: {
        maxWidth: 600,
        width: '100%'
    }
};

class RecipesList extends Component {
    render() {
        let id = this.props.routeParams.id;
        return (
            <div style={styles.container}>
                <AddBar />
                {this.props.route.items
                    .filter(_ => !id || _.id === id)
                    .map((item, index) => (
                        <Recipe
                            key={index}
                            deleteRecipe={this.props.route.deleteRecipe}
                            {...item}
                        />
                    ))}
            </div>
        );
    }
}

Recipe.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

export default RecipesList;
