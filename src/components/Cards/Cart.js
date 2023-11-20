import '../../styles/Cart.scss';
import ProductCart from './ProductCart';
import Button from '../Button'
import { useEffect } from 'react';

function Cart ({ setNumberItem, cart, updateCart }) {
  const total = cart.reduce((acc, { price, amount }) => acc + price * amount, 0);

  const alertPay = () => {
    return total > 0 ? alert(`You have to pay ${total} $`) : alert("You have nothing in your cart")
  }

  useEffect(() => {
    if (total !== 0) {
      document.title = `Your Cart is $${total}`;
    }
  },[total])

  return (
    <div className='cart'>
      <div className='cart-top'>
        <div className='cart-title'>My Cart</div>
        <Button children={"Continue shopping"} buttonClass="round-green" onClick={() => setNumberItem(false)} />
      </div>
      {cart.length > 0 ? (
        cart.map (({ name, price, amount }, index) =>
        <ProductCart
          key={`${name}-${index}`}
          name={name}
          price={price}
          amount={amount}
          index={index}
          updateCart={updateCart}
          cart={cart}
        />
        )
      ) : (
        <div>Your cart is empty</div>
      )}
      <div className='cart-bottom'>
        <div className='cart-total'>TOTAL: ${total}</div>
        <Button children={"Checkout"} buttonClass="round-green" onClick={() => alertPay()}/>
      </div>
    </div>
  )
}

export default Cart;
