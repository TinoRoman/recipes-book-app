import React, { Component } from 'react';
import Latest from './Latest';
import CreateRecipe from './CreateRecipe';
import ViewRecipes from './ViewRecipes';
import Main from './Main';
import { Colors } from '../constants/constants';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        props.actions.loadRecipes();
    }
    render() {
        return (
            <Router key={Math.random()} history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute
                        recipes={this.props.storeState.recipes.latest}
                        deleteRecipe={this.props.actions.deleteRecipe}
                        component={Latest}
                        title={'Latest recipes'}
                    />
                    <Route
                        addNewRecipe={this.props.actions.addNewRecipe}
                        path="/add"
                        component={CreateRecipe}
                        title={'Add new recipe'}
                    />
                    <Route
                        recipes={this.props.storeState.recipes.all}
                        updateRecipe={this.props.actions.updateRecipe}
                        path="/(:id)"
                        component={ViewRecipes}
                        title={'Recipe'}
                    />
                </Route>
            </Router>
        );
    }
}

export default AppRouter;
