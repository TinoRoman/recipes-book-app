import React, { Component, PropTypes } from 'react';
import EditRecipe from './EditRecipe';

class CreateRecipe extends Component {
    render() {
        return <EditRecipe editRecipe={this.props.route.addNewRecipe} />;
    }
}

export default CreateRecipe;
