import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-title">
        <h1>Space Travel</h1>
        <FontAwesomeIcon icon={faShuttleSpace} rotation={270} size="xl" style={{color: "#ffffff",}} />
      </div>
      <div className="nav-links">
      </div>
    </div>
  )
}

export default Navbar;
