import './App.scss';
import Navbar from './components/Navbar';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBurgerMenu(true);
      }
      else {
        setBurgerMenu(false);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [burgerMenu]);

  return (
    <div>
      <Navbar burgerMenu={burgerMenu} />
      <div className="container">
        <p>Hello</p>
      </div>
    </div>
  );
}

export default App;
