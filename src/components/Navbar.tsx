import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : "nav-link"}>
                Calculator
            </NavLink>
            <NavLink to="/history" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>
                History
            </NavLink>
        </nav>
    );
}

export default Navbar;