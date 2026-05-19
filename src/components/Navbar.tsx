import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/Calculator-in-React-scratch/"
        end
        className={({ isActive }) => (isActive ? 'linkOn' : 'linkOff')}
      >
        Calculator
      </NavLink>
      <NavLink
        to="/Calculator-in-React-scratch/history"
        className={({ isActive }) => (isActive ? 'linkOn' : 'linkOff')}
      >
        History
      </NavLink>
    </nav>
  );
}

export default Navbar;
