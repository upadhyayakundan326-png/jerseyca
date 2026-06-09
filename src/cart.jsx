function Cart(props) {
  return (
    <>
      <h2>Cart: {props.cart.length}</h2>

      <h3>Total Price: ₹{props.total}</h3>

      {props.cart.map((item) => (
        <div key={item.id}>
          <p>{item.team}</p>
          <p>Size: {item.size}</p>
          <p>{item.price}</p>

          <button onClick={() => props.removecart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
}

export default Cart;