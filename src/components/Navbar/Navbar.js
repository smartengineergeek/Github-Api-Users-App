import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar-main">
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/search-user">Users</Link></li>
                <li>Page3</li>
                <li>Page4</li>
                <li>Page5</li>
                <li>Page6</li>
                <li>Page7</li>
            </ul>
        </div>
    )
}

export default Navbar;