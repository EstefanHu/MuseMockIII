import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = props => {
    return props.isLoggedIn ? (
        <>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/profile">PROFILE</Link>
            </li>
            <li>
                <Link to="/create">WRITE</Link>
            </li>
        </>
    ) : '';
}

export default NavLinks;