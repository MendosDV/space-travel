import '../../styles/Footer.scss';
import Button from '../Button';
import ListLinks from './ListLinks';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer () {
  const [email, setEmail] = useState("");
  const [sizeLogo, setSizeLogo] = useState("sm")

  useEffect(() => {
    const handleResizeLogo = () => {
      if (window.innerWidth >= 768) {
        setSizeLogo("xl");
      }
      else {
        setSizeLogo("sm");
      }
    }

    window.addEventListener('resize', handleResizeLogo);
    handleResizeLogo();

    return () => {
      window.removeEventListener('resize', handleResizeLogo);
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing ${email} !`);
    setEmail("");
  }

  return (
    <div className='footer'>
      <h3>Join our trip newsletter to receive our best vacation deals</h3>
      <p>You can unsubscribe at any time</p>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Button children='Subscribe' buttonClass='transparent-button'/>
      </form>
      <div className="footer-links">
        <ListLinks children={"About us"} sections={["How it works", "Testimonials", "Careers", "Investors", "Terms of Service"]}/>
        <ListLinks children={"Contact Us"} sections={["Contact", "Support", "Destinations", "Sponsors"]}/>
        <ListLinks children={"Videos"} sections={["Submit Video", "Ambassadors", "Agency", "Influencer"]}/>
        <ListLinks children={"Social Media"} sections={["Instagram", "Facebook", "Youtube", "Twitter"]}/>
      </div>
      <div className="copyright">
        <div className="footer-title">
          <h1>Space Travel</h1>
          <FontAwesomeIcon icon={faShuttleSpace} rotation={270} size={sizeLogo} style={{color: "#ffffff",}} />
        </div>
        <p className='copyright-text'>Copyright © 2022 Space Travel</p>
        <div className="logos">
          <FontAwesomeIcon icon={faFacebook} size={sizeLogo} style={{color: "#ffffff",}} />
          <FontAwesomeIcon icon={faInstagram} size={sizeLogo} style={{color: "#ffffff",}} />
          <FontAwesomeIcon icon={faTwitter} size={sizeLogo} style={{color: "#ffffff",}} />
        </div>
      </div>
    </div>
  )
}

export default Footer;
