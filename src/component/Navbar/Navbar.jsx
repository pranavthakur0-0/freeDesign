
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div className="main-navbar-wrapper">
        <nav>
            <div className="logo">Logo</div>
            <ul>
                <li><NavLink className="navbar-link" to="/">Home</NavLink></li>
                <li><NavLink className="navbar-link" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        <div className="main-navbar-line">
            <div></div>
        </div>
        </div>
    </>
  );
}

export default Navbar;
