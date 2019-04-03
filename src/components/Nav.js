import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';

export class Nav extends PureComponent {
    static propTypes = {
        nav: PropTypes.func.isRequired
    };
    handleAllButton = () => {
        const {nav} = this.props;

        nav('All');
    };

    handleActiveButton = () => {
        const {nav} = this.props;
        nav('Active');
    };

    handleDoneButton = () => {
        const {nav} = this.props;
        nav('Done');
    };

    render() {
        return (
            <nav id='navigation'>
                <ul>
                    <li key='All'>
                        <button className='active' onClick={this.handleAllButton}>All</button>
                    </li>
                    <li key='Active'>
                        <button onClick={this.handleActiveButton}>Active</button>
                    </li>
                    <li key='Done'>
                        <button onClick={this.handleDoneButton}>Done</button>
                    </li>
                </ul>
            </nav>

        )
    }


}

export default Nav