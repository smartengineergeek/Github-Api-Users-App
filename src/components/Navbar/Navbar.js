import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar-main">
            <ul>
                <li><Link to="/search-user">Search Users</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li>AnotherLink</li>
                <li>AnotherLink</li>
                <li>AnotherLink</li>
            </ul>
        </div>
    )
}

export default Navbar;