import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './navlinks';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            <nav>
                <Link to="/">Muse</Link>
                <NavLinks isLoggedIn={this.state.isLoggedIn} />
                <Link to="/settings">Settings</Link>
            </nav>
        );
    }
}

export default Navbar;