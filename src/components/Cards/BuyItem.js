import '../../styles/BuyItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function BuyItem ({children, addItem, name, price, cart, updateCart}) {
  const addToCart = (name, price) => {
    addItem();

    const currentItemAdd = cart.find((item) => item.name === name);
    if (currentItemAdd) {
      const cartFiltered = cart.filter((item) => item.name !== name);
      updateCart([...cartFiltered, { name, price, amount: currentItemAdd.amount + 1 }]);
    }
    else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <button onClick={() => addToCart(name, price)} className='buyItem'>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
      {children}
    </button>
  )
}

export default BuyItem
