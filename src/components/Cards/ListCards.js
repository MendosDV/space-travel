import '../../styles/ListCards.scss';
import { planeteList } from '../../datas/planeteList';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import Cart from './Cart';

function ListCards () {
  const cartRef = useRef(null);
  const [cart, updateCart] = useState([]);
  const [numberItem, setNumberItem] = useState(false);
  const [sizeIcon, setSizeIcon] = useState("sm");

  const addItem = () => {
    setNumberItem(numberItem + 1);
  }

  const scrollToCart = () => {
    console.log("scrollToCart called");
    if (cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleClick = () => {
    setNumberItem(!numberItem);
    scrollToCart();
  }

  useEffect(() => {
    const handleResizeIcon = () => {
      if (window.innerWidth >= 768) {
        setSizeIcon("sm");
      }
      else {
        setSizeIcon("xs");
      }
    }

    window.addEventListener('resize', handleResizeIcon);
    handleResizeIcon();

    return () => {
      window.removeEventListener('resize', handleResizeIcon);
    }
  }, [sizeIcon]);

  return (
    <div className='list-planetes'>
      {planeteList.map (({ name, id, image, type, diameter, distance, scale, price, rated, bestSale }) =>
        <div className="planete" key={id}>
          <Card
            name={name}
            id={id}
            image={image}
            type={type}
            diameter={diameter}
            distance={distance}
            scale={scale}
            price={price}
            rated={rated}
            bestSale={bestSale}
            addItem={addItem}
            numberItem={numberItem}
            cart={cart}
            updateCart={updateCart}
          />
        </div>
      )}
      <div ref={cartRef}></div>
      {numberItem ? (
        <Cart setNumberItem={setNumberItem} cart={cart} updateCart={updateCart}/>
      ) : (
        <div className='small-cart'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#238557",}} size={sizeIcon} onClick={() => handleClick()} />
        </div>
      )}
    </div >
  )
}

export default ListCards;
