import React, { useEffect } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import M from  'materialize-css/dist/js/materialize.min.js';


const Navbar = (props) => {
    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }, []);

    const navbarLinks = [
        <li><Link to={"/"} id="linkTags">Home</Link></li>,
        <li><Link to={"/Contact"} id="linkTags">Contact</Link></li>,
        <li><Link to={"/Portfolio"} id="linkTags">Portfolio</Link></li>
        //<li><Link to={"/WhateverRoute"} id="linkTags">routeName</Link></li>
    ]
  
    return (
        <nav>
        {/* NavBar */}
        <div className="nav-wrapper">
            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down" id="menuList">
                {navbarLinks}
            </ul>
        </div>
        {/* hamburger menu */}
        <div className="sideContainer">
            <ul id="slide-out" className="sidenav">
                {navbarLinks}
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;