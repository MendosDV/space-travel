import '../../styles/BuyItem.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function BuyItem ({children}) {
  const [numberItem, setNumberItem] = useState(0);
  const addItem = () => {
    setNumberItem(numberItem + 1);
  }

  return (
    <button onClick={addItem} className='buyItem'>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
      {children}
      {numberItem > 0 ? <span>{numberItem}</span> : null}
    </button>
  )
}

export default BuyItem
