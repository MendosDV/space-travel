import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleSpace, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ burgerMenu }) {
  const [showNav, setShowNav] = useState(false);
  const handleShowBar = () => {
    setShowNav(!showNav);
  }

  const navMenuClasses = showNav ? 'nav-menu-show show-nav-menu' : 'nav-menu-show';

  return (
    burgerMenu ? (
      <div className="navbar-container">
        <div className="nav-title">
          <h1>Space Travel</h1>
          <FontAwesomeIcon icon={faShuttleSpace} rotation={270} size="xl" style={{color: "#ffffff",}} />
        </div>
        { showNav ? (
          <FontAwesomeIcon onClick={handleShowBar} icon={faXmark} size="xl" style={{color: "#ffffff", cursor: "pointer",}} />
          ) : (
            <FontAwesomeIcon onClick={handleShowBar} icon={faBars} size="xl" style={{color: "#ffffff", cursor: "pointer",}}/>
          )}
        {showNav &&
          <div className={navMenuClasses}>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/Services" className='nav-item'>Services</Link>
            <Link to="/about" className='nav-item'>About</Link>
            <Link to="/signup" className='signup'>Sign Up</Link>
          </div>
        }
      </div>
    ) :
    <div className="navbar-container">
      <div className="nav-title">
        <h1>Space Travel</h1>
        <FontAwesomeIcon icon={faShuttleSpace} rotation={270} size="xl" style={{color: "#ffffff",}} />
      </div>
      <div className='nav-links-container'>
        <div className="nav-links">
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/Services" className='nav-item'>Services</Link>
          <Link to="/about" className='nav-item'>About</Link>
        </div>
        <Link to="/signup" className='signup'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar;
