import React from 'react'
import {Link} from "react-router-dom"

function Navbar ()
{
    return <div className='header-div'>
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <Link class="navbar-brand" to="/">Devlink Marketplace</Link>

                <ul className="navbar-nav" sytle="float: right">
                    <li className="nav-item">
                    <a className="nav-link" href="/newjob">Find Dev</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Find Jobs</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/signup">Create Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}

export default Navbar