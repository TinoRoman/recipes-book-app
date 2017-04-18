import React, { Component, PropTypes } from 'react';
import { Colors, DATE_FORMAT } from '../constants/constants';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

const styles = {
    recipe: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        marginBottom: 20
    },
    title: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.YELLOW,
        padding: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    name: {
        color: Colors.PURPLE,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'calibri'
    },
    date: {
        color: Colors.PURPLE,
        fontSize: 18,
        fontFamily: 'calibri',
        alignSelf: 'flex-end'
    },
    description: {
        flex: 0,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        border: 'solid',
        borderColor: Colors.YELLOW,
        backgroundColor: Colors.WHITE,
        padding: 15,
        color: Colors.PURPLE,
        fontFamily: 'calibri',
        fontSize: 18,
        clear: 'both'
    },
    icon: {
        color: Colors.PURPLE,
        fontSize: 22,
        paddingLeft: 5,
        paddingRight: 5,
        cursor: 'pointer'
    }
};

class Recipe extends React.Component {
    render() {
        return (
            <div style={styles.recipe}>
                <div style={styles.title}>
                    <div style={styles.name}>{this.props.name}</div>
                    <div>
                        <Link to={`/${this.props.id}`}>
                            <FontAwesome style={styles.icon} name="pencil" />
                        </Link>
                        <FontAwesome
                            onClick={() =>
                                confirm('Are you sure you want to delete') &&
                                this.props.deleteRecipe(this.props.id)}
                            style={styles.icon}
                            name="times"
                        />
                    </div>
                </div>
                <div style={styles.description}>
                    {this.props.description}
                    <div style={styles.date}>
                        {moment(this.props.date * 1000).format(DATE_FORMAT)}
                    </div>
                </div>
            </div>
        );
    }
}

Recipe.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    latest: PropTypes.bool
};

export default Recipe;
