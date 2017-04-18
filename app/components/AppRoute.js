import React, { Component } from 'react';
import RecipesList from './RecipesList';
import AddNew from './AddNew';
import { Colors } from '../constants/constants';
import { Router, Route, browserHistory } from 'react-router';

const styles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.PURPLE_LIGHT,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 40,
        fontFamily: 'calibri',
        color: Colors.WHITE,
        marginTop: 40,
        marginBottom: 80
    }
};

class AppRouter extends Component {
    constructor(props) {
        super(props);
        props.actions.loadRecipes();
    }
    render() {
        let ordered = this.props.storeState.recipes.latest.sort(
            (a, b) => b.date - a.date
        );
        return (
            <div style={styles.page}>
                <div>
                    <h1 style={styles.title}>Recipes App</h1>
                </div>
                <Router key={Math.random()} history={browserHistory}>
                    <Route path="/add" component={AddNew} />
                    <Route
                        path="/(:id)"
                        items={ordered}
                        deleteRecipe={this.props.actions.deleteRecipe}
                        component={RecipesList}
                    />
                </Router>
            </div>
        );
    }
}

export default AppRouter;
