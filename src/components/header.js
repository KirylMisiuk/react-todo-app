import React, {PureComponent} from 'react'
import logo from '../images/logo.png'
export class Header extends PureComponent {
    render() {

        return (
            <header id='page-header'>
                <div>
                <img id='logo' src={logo} alt='logo'/>
                </div>

                <input id= 'form-input'
                    // value=' '
                    type="text"
                    name="todo"
                    maxLength="120"
               //     onChange={this.handleChangeInput}
                    placeholder="What should I do?"
                    className="form-input"
                />
            </header>
        )
    }
}

export default Header