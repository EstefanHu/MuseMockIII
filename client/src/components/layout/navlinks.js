import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = props => {
    return props.isLoggedIn ? (
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
            </ul>
        </span>
    ) : (
        <span>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </span>
    );
}

export default NavLinks;