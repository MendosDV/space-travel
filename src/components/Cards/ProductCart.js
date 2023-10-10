import '../../styles/ProductCart.scss';

function ProductCart ({ name, price, amount, index, updateCart, cart}) {
  const total = price * amount;
  const removeProduct = () => {
    updateCart(cart.filter((item) => item.name !== name));
  }

  return (
    <div className='product-cart' style={index % 2 !== 0 ? {backgroundColor: "rgb(230, 230, 230)"} : null }>
      <div className='product-informations'>
        <div className='product-name'>Ticket to <span style={{fontWeight: "500"}}>{name}</span></div>
        <div className='product-number-stock'>
          <div className='product-number'><span>{amount}</span> x ${price}</div>
          <div className='product-stock'>IN STOCK</div>
        </div>
      </div>
        <div className="total-price-product">
          <div className='product-price'>${total}</div>
          <div className='remove' onClick={() => removeProduct()}>X</div>
        </div>
    </div>
  )
}

export default ProductCart;
