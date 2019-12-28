import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Muse</Link>
                <span>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/create">Write</Link>
                        </li>
                        <li>
                            <Link to="/test">Test</Link>
                        </li>
                    </ul>
                </span>
            </nav>
        );
    }
}

export default Navbar;