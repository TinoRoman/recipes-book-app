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
        flex: 1,
        color: Colors.PURPLE,
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5,
        width: '100%',
        marginRight: 10,
        fontFamily: 'calibri'
    },
    date: {
        color: Colors.PURPLE,
        fontSize: 18,
        fontFamily: 'calibri',
        alignSelf: 'flex-end'
    },
    body: {
        flex: 0,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        border: 'solid',
        borderColor: Colors.YELLOW,
        backgroundColor: Colors.WHITE,
        padding: 15
    },
    description: {
        color: Colors.PURPLE,
        fontFamily: 'calibri',
        fontSize: 18,
        resize: 'none',
        outline: 'none'
    },
    icon: {
        color: Colors.PURPLE,
        fontSize: 22,
        paddingLeft: 5,
        paddingRight: 5,
        cursor: 'pointer'
    }
};

class EditRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || '',
            description: this.props.description || ''
        };
        this.edit = this.edit.bind(this);
    }
    edit() {
        if (this.state.name.length >= 3 && this.state.description.length >= 10) {
            this.props.editRecipe(this.state.name, this.state.description, this.props.id);
        } else {
            alert('Name should be at least 3 chars long and description at least 10');
        }
    }
    render() {
        return (
            <div style={styles.recipe}>
                <div style={styles.title}>
                    <input
                        style={styles.name}
                        type="text"
                        placeholder="name"
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                    <div>
                        <FontAwesome
                            onClick={this.edit}
                            style={styles.icon}
                            name="check"
                        />
                    </div>
                </div>
                <div style={styles.body}>
                    <textarea
                        style={styles.description}
                        rows="10"
                        placeholder="description"
                        value={this.state.description}
                        onChange={event =>
                            this.setState({ description: event.target.value })}
                    />
                </div>
            </div>
        );
    }
}

export default EditRecipe;
