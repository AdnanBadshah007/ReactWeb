import React from "react";
import {NavLink} from "react-router-dom"
import toggle from "./images/list.svg"


let NavBar = () => {
    return (
        <>

    <div className="container">
    <div className="row">
        <nav className="navbar navbar-expand-sm nav_light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Adnan Badshah</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <img src={toggle} alt={toggle}/>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" to="/service">Service</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" to="/about">About</NavLink>
                </li>  
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" to="/contact">Contact</NavLink>
                </li>   
            </ul>
            </div>  
        </div>
    </nav>
    </div>
    </div>

    
        </>
    )
}


export default NavBar;