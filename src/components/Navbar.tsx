import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'linkOn' : 'linkOff')}
      >
        Calculator
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) => (isActive ? 'linkOn' : 'linkOff')}
      >
        History
      </NavLink>
    </nav>
  );
}

export default Navbar;
