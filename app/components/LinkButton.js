import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Colors } from '../constants/constants';
import { Link } from 'react-router';

const styles = {
    title: {
        color: Colors.PURPLE,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'calibri'
    },
    icon: {
        color: Colors.PURPLE,
        fontSize: 22,
        paddingLeft: 5,
        paddingRight: 5,
        cursor: 'pointer',
        marginRight: 10
    },
    container: {
        textDecoration: 'none',
        display: 'flex',
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.YELLOW
    }
};

class LinkButton extends Component {
    render() {
        return (
            <Link style={styles.container} to={this.props.link}>

                {this.props.icon &&
                    <FontAwesome style={styles.icon} name={this.props.icon} />}
                <span style={styles.title}>{this.props.title}</span>
            </Link>
        );
    }
}

LinkButton.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default LinkButton;
