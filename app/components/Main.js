import React, { PropTypes } from 'react';
import { Colors } from '../constants/constants';
import LinkButton from './LinkButton';

const styles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.PURPLE_LIGHT,
        paddingLeft: 10,
        paddingRight: 10,
        position: 'relative',
        paddingBottom: 100
    },
    title: {
        fontSize: 40,
        fontFamily: 'calibri',
        color: Colors.WHITE,
        marginTop: 40,
        marginBottom: 60,
        textAlign: 'center'
    },
    container: {
        maxWidth: 600,
        width: '100%'
    },
    navigationPanel: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.PURPLE
    },
    navigation: {
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        padding: 20
    }
};

const Main = props => {
    let title = props.children.props.route.title;
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>{title ? title : 'Recipes App'}</h1>
                {props.children}
                <div style={styles.navigationPanel}>
                    <div style={styles.navigation}>
                        <LinkButton
                            link={'/'}
                            title={'All recipes'}
                            icon={'file-text-o'}
                        />
                        &nbsp;
                        <LinkButton
                            link={'/add'}
                            title={'Add new recipe'}
                            icon={'plus'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
