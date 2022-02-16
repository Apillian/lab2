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
            <NavLink to="/Ejercicio3"> Ejercicio 3</NavLink>
            </li>
            <li>
            <NavLink to="/Ejercicio4"> Ejercicio 4</NavLink>
            </li>

        </ul>

    );
}

export default NavLinks;