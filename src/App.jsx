import react, { useState } from "react"
import Navbar from "./navbar";
import Cart from "./cart";

function App(){
  const jerseys=
  [{
      id: 1,
      team: "Germany",
      price: 999,
    },
    {
      id: 2,
      team: "Brazil",
      price: 999,
    },
    {
      id: 3,
      team: "Argentina",
      price: 1099,
    },
    {
      id: 4,
      team: "England",
      price: 999,
    },
    {
      id: 5,
      team: "France",
      price: 1099,
    },
    {
      id: 6,
      team: "Spain",
      price: 999,
    },
    {
      id: 7,
      team: "Portugal",
      price: 1099,
    },
    {
      id: 8,
      team: "Italy",
      price: 999,
    },
    {
    id: 101,
    team: "Manchester City",
    price: 1499,
  },
  {
    id: 102,
    team: "Real Madrid",
    price: 1599,
  },
  {
    id: 103,
    team: "Barcelona",
    price: 1599,
  },
  {
    id: 104,
    team: "Manchester United",
    price: 1499,
  },
  {
    id: 105,
    team: "Liverpool",
    price: 1499,
  },
  {
    id: 106,
    team: "Arsenal",
    price: 1499,
  },
  {
    id: 107,
    team: "Chelsea",
    price: 1499,
  },
  {
    id: 108,
    team: "Bayern Munich",
    price: 1599,
  },
  {
    id: 109,
    team: "Paris Saint-Germain",
    price: 1699,
  },
  {
    id: 110,
    team: "Juventus",
    price: 1499,
  },
  ];

  let [search,setsearch]=useState("");
  let [cart, setcart]=useState([])
  let addtocart=(jersey)=>{
    setcart((prev)=>[...prev,jersey])

  }
  let removecart =(xyz)=>{
    setcart((prev)=>prev.filter((item)=>item.id!==xyz))
  }

let filteredjerseys=jerseys.filter((jersey)=>
  jersey.team.toLowerCase().includes(search.toLowerCase()));
console.log(filteredjerseys)

//const total = cart.reduce(
  //(sum, item) => sum + item.price,
  //0
//);
let total = 0;

for (let i = 0; i < cart.length; i++) {
  total = total + cart[i].price;
}
return(
  <>
  <Navbar search={search}
  setsearch={setsearch}
  
  />
  
  <Cart cart={cart}
    removecart={removecart}
    total={total}
  />


  {filteredjerseys.map((jersey)=>(
    <div key={jersey.id}>
      <p> Team:{jersey.team}</p>
      <p> price:${jersey.price}</p>
      <button onClick={()=>addtocart(jersey)}>Add to cart</button>
    </div>
  ))}
  

  </>
)


}

export default App;