import '../../styles/Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faMountainSun, faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import BuyItem from './BuyItem';

function Card ( { name, image, type, diameter, distance, price, rated, bestSale }) {
  const [sizeIcon, setSizeIcon] = useState("xl")
  const [sizeScreen, setSizeScreen] = useState(false)
  const paragraph = <p>Located at <span>{distance}</span> km from us and measures <span>{diameter}</span> km in diameter.</p>

  useEffect(() => {
    const handleResizeIcon = () => {
      if (window.innerWidth >= 768) {
        setSizeIcon("sm");
      }
      else {
        setSizeIcon("2xs");
      }
    }

    window.addEventListener('resize', handleResizeIcon);
    handleResizeIcon();

    return () => {
      window.removeEventListener('resize', handleResizeIcon);
    }
  }, [sizeIcon]);

  useEffect(() => {
    const handleResizeScreen = () => {
      if (window.innerWidth >= 1024) {
        setSizeScreen(true);
      }
      else {
        setSizeScreen(false);
      }
    }

    window.addEventListener('resize', handleResizeScreen);
    handleResizeScreen();

    return () => {
      window.removeEventListener('resize', handleResizeScreen);
    }
  }, [sizeScreen]);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rated; i++) {
      stars.push(
        <FontAwesomeIcon
          className='star'
          key={i}
          icon={faStar}
          size="2xs"
          style={{ color: "#ffef3d" }}
        />
      );
    }
    return stars;
  };

  const renderPrice = () => {
    const dollars = [];
    for (let i = 0; i < price; i++) {
      dollars.push(
        <FontAwesomeIcon
          icon={faDollarSign}
          size={sizeIcon}
          style={{color: "#ffffff",}}
        />
      );
    }
    return dollars;
  };

  return (
    <div className='card'>
      <img src={image} alt={name} />
      { bestSale ? <div className='best-sale'>Best Sale</div> : null }
      <div className="planete-content">
        <div className="head-content">
          <div className="rated-planete">
            <h5>PLANETE</h5>
            <div>
              { sizeScreen ? renderStars() : null }
            </div>
          </div>
          {type === 'gas' ? <FontAwesomeIcon icon={faWind} size={sizeIcon} style={{color: "#ffffff",}} title="gaz" /> : <FontAwesomeIcon icon={faMountainSun} size={sizeIcon} style={{color: "#ffffff",}} title="rock" />}
        </div>
        <h3>{name}</h3>
        { sizeScreen ? paragraph : null }
        <div className="book">
          <div>
            {renderPrice()}
          </div>
          <BuyItem children="Add to cart" />
        </div>
      </div>
    </div>
  )
}

export default Card;
