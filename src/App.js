import './App.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner/Banner';
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
      <Banner secondButtonName={"WATCH TRAILER"} buttonName={"GET STARTED"} titleName={"TO INFINITY AND BEYOND"} subTitleName={"What are you waiting for ?"}/>
      <div className="container">
        
      </div>
    </div>
  );
}

export default App;
