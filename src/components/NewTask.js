import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import guid from "../utils";

export class MainPage extends PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };
    state = {
        todo: ''
    };
    handleChangeInput = e => this.setState({[e.target.name]: e.target.value})
    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        const {todo} = this.state;
        const result = {
            id: guid(),
            todo,
            done: false,
            favorite: false,
            search: false
        };
        onSubmit(result);
        this.setState({todo: ''});
    };

    render() {
        const {todo} = this.state;

        return (

            <form onSubmit={this.handleSubmit} id='task'>
                <h1 id='text'>New Task</h1>
                <input
                    value={todo}
                    type="text"
                    name="todo"
                    id='input'
                    onChange={this.handleChangeInput}
                    maxLength='100'/>

                <button className='add-btn' type="submit" disabled={todo.length === 0}>add</button>
            </form>

        )
    }


}

export default MainPage