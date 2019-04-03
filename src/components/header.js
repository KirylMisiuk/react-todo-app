import React, {PureComponent} from 'react'
import logo from '../images/logo.png'

export class Header extends PureComponent {
    state = {
        search: ''
    };

    handleChangeSearch = e => this.setState({[e.target.name]: e.target.value})


    render() {
        const {search} = this.state;
        return (

            <header id='page-header'>
                <div>
                    <img id='logo' src={logo} alt='logo'/>
                </div>

                <input id='form-input'
                       value={search}
                       type="text"
                       name="todo"
                       maxLength="50"
                       onChange={this.handleChangeSearch}
                       placeholder="Find Todo"
                       className="form-input"
                />
            </header>
        )
    }
}

export default Header