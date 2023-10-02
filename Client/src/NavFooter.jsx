import React from "react";
import Footer from "./Footer";
import {Outlet} from "react-router-dom"
import Navbar from "./Navbar";
import './NavFooter.css'

function NavFooter ()
{
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default NavFooter