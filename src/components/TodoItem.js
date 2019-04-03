import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


class TodoItem extends React.PureComponent {

    static propTypes = {
        todo: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        toggleDeleteButton: PropTypes.func.isRequired,
        toggleFavoriteButton: PropTypes.func.isRequired,
        toggleDoneButton: PropTypes.func.isRequired,
        favorite: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired
    };
    state = {
        inside: false,
    };

    handleDeleteButton = () => {
        const {toggleDeleteButton, id} = this.props;
        toggleDeleteButton(id);
    };

    handleFavoriteButton = () => {
        const {toggleFavoriteButton, id} = this.props;
        toggleFavoriteButton(id);
    };

    handleDoneButton = () => {
        const {toggleDoneButton, id} = this.props;
        toggleDoneButton(id);
    };

    handleHoverEnter = () => {
        this.setState({inside: true});
    };

    handleOutEnter = () => {
        this.setState({inside: false});
    };

    render() {
        const {todo, done, favorite} = this.props;
        const {inside} = this.state;
        let text = 'Not Important';
        if (!favorite) text = 'Mark Important';
        return (
            <div className="todo-item" onMouseEnter={this.handleHoverEnter} onMouseLeave={this.handleOutEnter}>

                <li className="todo-text" onClick={this.handleDoneButton}
                    style={{
                        textDecoration: done ? 'line-through' : 'none',
                    }}>  {favorite && <i className="far fa-star"/>}{todo}</li>
                <div className='buttons-container'>
                    {inside && <button type="button" className="favorite-button" onClick={this.handleFavoriteButton}
                                       style={{
                                           background: favorite ? 'rgba(116, 118, 122, 0.22)' : 'rgba(11, 255, 15, 0.87)'
                                       }}
                    >{text}</button>}
                    {inside && <button type="button" className="delete-button" onClick={this.handleDeleteButton}><i
                        className="fas fa-trash-alt delete-icon"/></button>}
                </div>
            </div>

        );
    }
}

export default TodoItem;
