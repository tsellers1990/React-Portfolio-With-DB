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
        <li key="1"><Link to={"/"} id="linkTags">Home</Link></li>,
        <li key="2"><Link to={"/Portfolio"} id="linkTags">Portfolio</Link></li>,
        <li key="3"><Link to={"/Secret"} id="secretLink">Secret</Link></li>
        // <li key="3"><Link to={"/Contact"} id="linkTags">Contact</Link></li>
    ]
  
    return (
        <nav>
        <div className="nav-wrapper" >
            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
            {/* <ul className="right hide-on-med-and-down" id="menuList">
                {navbarLinks}
            </ul> */}
        </div>
        <div className="sideContainer">
            <ul id="slide-out" className="sidenav">
                {navbarLinks}
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;