import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './navlinks';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }

    render() {
        return (
            <nav>
                <Link to="/"><h2>Muse</h2></Link>
                <span>
                    <ul>
                        <li><Link to="/dashboard">DASHBOARD</Link></li>
                        <NavLinks isLoggedIn={this.state.isLoggedIn} />
                    </ul>
                </span>
                <Link to="/settings">Settings</Link>
            </nav>
        );
    }
}

export default Navbar;