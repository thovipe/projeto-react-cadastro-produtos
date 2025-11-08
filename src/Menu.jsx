import './menu.modules.css'
import { NavLink } from "react-router-dom";


export default function Menu() {
    return (
        <header>
            
            <NavLink to={"/"}>Main</NavLink>

            <NavLink to={"/filtro"}>Filtro</NavLink>
        </header>
    )
}