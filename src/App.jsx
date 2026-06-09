import react, { useState } from "react"
import Navbar from "./navbar";
import Cart from "./cart";
import Catego from "./category";
function App(){
let jerseys=
[

{ id: 1, team: "Germany", price: 999,category:"national", image: "/jersey/germany.jpg"},
    { id: 2, team: "Brazil", price: 999,category:"national", image: "/jersey/brasil.avif" },
    { id: 3, team: "Argentina", price: 1099,category:"national", image: "jersey/argendtina.jpg" },
    { id: 4, team: "England", price: 999,category:"national", image: "/jersey/england.jpg" },
    { id: 5, team: "France", price: 1099,category:"national", image: "jersey/france.jpg" },
    { id: 6, team: "Spain", price: 999,category:"national", image: "/jersey/spain.webp" },
    { id: 7, team: "Portugal", price: 1099,category:"national", image: "/jersey/portu.webp" },
    { id: 8, team: "Italy", price: 999,category:"national", image: "/jersey/italy.avif" },

    { id: 101, team: "Manchester City", price: 1499,category:"club", image: "/jersey/city.jpg" },
    { id: 102, team: "Real Madrid", price: 1599,category:"club", image: "/jersey/madrid.jpg" },
    { id: 103, team: "Barcelona", price: 1599,category:"club", image: "/jersey/barca.jpg" },
    { id: 104, team: "Manchester United", price: 1499,category:"club", image: "/jersey/manchester.jpg" },
    { id: 105, team: "Liverpool", price: 1499,category:"club", image: "/jersey/liverpool.jpg" },
    { id: 106, team: "Arsenal", price: 1499,category:"club", image: "/jersey/arsenal.jpg" },
    { id: 107, team: "Chelsea", price: 1499,category:"club", image: "/jersey/chelsea.webp" },
    { id: 108, team: "Bayern Munich", price: 1599,category:"club", image: "/jersey/bayern.webp" },
    { id: 109, team: "Paris Saint-Germain", price: 1699,category:"club", image: "/jersey/psg.webp" },
    { id: 110, team: "Juventus", price: 1499,category:"club", image: "/jersey/juventus.webp" },
  ];

  

  let [search,setsearch]=useState("");
  let [cart, setcart]=useState([])


  let [dropdown,setdropdown]=useState('All')

  



  let addtocart=(jersey)=>{
    setcart((prev)=>[...prev,jersey])

  }
  let removecart =(xyz)=>{
    setcart((prev)=>prev.filter((item)=>item.id!==xyz))
  }

let filteredjerseys=jerseys.filter((jersey)=>
  jersey.team.toLowerCase().includes(search.toLowerCase())&& 
    (dropdown==="All"||jersey.category===dropdown))
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
  <Catego option={dropdown}
        setoption={setdropdown}/>


  {filteredjerseys.map((jersey)=>(
    <div key={jersey.id}>
      <p> Team:{jersey.team}</p>
      <img src={jersey.image} alt={jersey.team}
      style={{
    width: "220px",
    height: "220px",
    objectFit: "cover"
  }} />
   <p>Category: {jersey.category}</p>
   
  
    <p> price:${jersey.price}</p>
      <button onClick={()=>addtocart(jersey)}>Add to cart</button>
    </div>
  ))}
  

  </>
)



}
export default App;