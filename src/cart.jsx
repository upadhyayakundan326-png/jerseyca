function Cart(props) {
  return (
    <>
      <h2>🛒: {props.cart.length}</h2>

      <h3>Total Price: ₹{props.total}</h3>
      {props.cart.length === 0 && <h3>Cart is Empty</h3>}

      {props.cart.map((item) => (
        <div key={item.id+item.size}>
          <p>Team:{item.team}</p>
          <p>Size: {item.size}</p>
          <p>Price:{item.price}</p>
          <p>Quantity:{item.quantity}</p>
          <img
      src={item.image}
      alt={item.team}
      style={{
        width: "120px",
        height: "120px",
        objectFit: "cover",
      }}/>
          <button onClick={()=>props.increase(item.id,item.size)}>+</button>
          <button onClick={()=>props.decrease(item.id,item.size)}>-</button>

          <button onClick={() => props.removecart(item.id)}>
            Remove
          </button>
      

        </div>
      ))}
      {props.cart.length > 0 && (
  <button onClick={props.clearcart}>Clear Cart</button>
)}
    </>
  );
}

export default Cart;