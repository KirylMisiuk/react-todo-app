import React, {PureComponent} from 'react'
import logo from '../images/logo.png'

export class Header extends PureComponent {
    state = {
        search: ''
    };
    handleChangeInput = (e) => {
        console.log(e.target);
        this.setState({[e.target.name]: e.target.value});
        const {onSearch} = this.props;
        onSearch(e.target.value);
    };


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
                       name="search"
                       maxLength="120"
                       onChange={this.handleChangeInput}
                       placeholder="What should I do?"
                       className="form-input"
                />
            </header>
        )
    }
}

export default Header