import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Colors } from '../constants/constants';
import { Link } from 'react-router';

const styles = {
    container: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: Colors.YELLOW
    },
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
        cursor: 'pointer'
    }
};

const AddBar = () => {
    return (
        <div style={styles.container}>
            <span style={styles.title}>Latest recipes</span>
            <Link to={`/add`}>
                <FontAwesome style={styles.icon} name="plus" />
            </Link>
        </div>
    );
};

export default AddBar;
