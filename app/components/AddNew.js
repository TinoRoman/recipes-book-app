import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Colors } from '../constants/constants';
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
    },
    container: {
        maxWidth: 600,
        width: '100%'
    }
};

class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };
    }
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.recipe}>
                    <div style={styles.title}>
                        <input
                            type="text"
                            placeholder="name"
                            value={this.state.name}
                            onChange={event => this.setState({ name: event.text })}
                        />
                        <div>

                            <FontAwesome
                                onClick={() => {}}
                                style={styles.icon}
                                name="check"
                            />
                            <Link to={`/`}>
                                <FontAwesome style={styles.icon} name="times" />
                            </Link>
                            <FontAwesome onClick={() => {}} style={styles.icon} />
                        </div>
                    </div>
                    <div style={styles.description}>
                        <textarea
                            rows="10"
                            placeholder="description"
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.text })}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNew;
