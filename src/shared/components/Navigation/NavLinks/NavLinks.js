import react from "react"
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
    return(
        <ul className="nav-links">

            <li>
            <NavLink to="/Ejercicio2"> Ejercicio 2</NavLink>
            </li>
            <li>
            <NavLink to="/u1/places" exact> Ejercicio 3</NavLink>
            </li>
            <li>
            <NavLink to="/auth" exact> Ejercicio 4</NavLink>
            </li>

        </ul>

    );
}

export default NavLinks;