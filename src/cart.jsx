function Cart(props) {
  return (
    <>
      <h2>Cart: {props.cart.length}</h2>

      <h3>Total Price: ₹{props.total}</h3>
      {props.cart.length === 0 && <h3>Cart is Empty</h3>}

      {props.cart.map((item) => (
        <div key={item.id+item.size}>
          <p>{item.team}</p>
          <p>Size: {item.size}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <button onClick={()=>props.increase(item.id,item.size)}>+</button>
          <button onClick={()=>props.decrease(item.id,item.size)}>-</button>

          <button onClick={() => props.removecart(item.id)}>
            Remove
          </button>
          <button onClick={props.clearcart}>
  Clear Cart
</button>
        </div>
      ))}
    </>
  );
}

export default Cart;