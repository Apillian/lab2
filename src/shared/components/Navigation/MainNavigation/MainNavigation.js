import React from "react";
import {Link} from "react-router-dom";

import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks.js"

const MainNavigation = (props) => {
    return(
        <MainHeader>
            <button className="main-navigation_menu-btn">
                <span />
                <span />
                <span />

            </button>

            <h1 className="main-navigation_title">
                <Link to="/" exact>Ejercicio 1 </Link>
            </h1>

            <nav className="Main-navigation__header-nav">
                <NavLinks />

            </nav>
        </MainHeader>
    )
}

export default MainNavigation;