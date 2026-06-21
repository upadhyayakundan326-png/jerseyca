import react, { useState } from "react"
import Navbar from "./navbar";
import Cart from "./cart";
import Catego from "./category";
import "./App.css";
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

  let [selectedSize, setSelectedSize] = useState({});

  let [page,setpage]=useState("home");

  


let addtocart = (jersey) => {
  if (selectedSize[jersey.id]) {
    setcart((prev) => [
      ...prev,
      {
        ...jersey,
        size: selectedSize[jersey.id],
        quantity:1,
      },
    ]);
  } else {
    alert("Please select size");
  }
};
let increase=(id,size)=>{
  setcart((prev)=>
  prev.map((item)=>
  item.id===id&&item.size===size
  ?{...item,quantity:item.quantity+1}
  :item


  ))
}
let decrease = (id, size) => {
  setcart((prev) =>
    prev.map((item) => {
      if (item.id === id && item.size === size && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } 
      else if (item.id === id && item.size === size && item.quantity === 1) {
        return item;
      } 
      else {
        return item;
      }
    })
  );
};

let removecart = (xyz) => {
  setcart((prev) => prev.filter((item) => item.id !== xyz));
};

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
  total = total + cart[i].price * cart[i].quantity;
}
return(
  <>
  <nav className="nav">
  <button onClick={()=>setpage("home")}>Home</button>
  <button onClick={()=>setpage("about")}>About</button>
  <button onClick={()=>setpage("help")}>Help</button>
  <button onClick={()=>setpage("contact")}>contact us</button>

  </nav>
  {page==="home"&&(
<>
  <Navbar search={search}
  setsearch={setsearch}
  
  />
  
  <Cart cart={cart}
    removecart={removecart}
    total={total}
      clearcart={() => setcart([])}
      increase={increase}
      decrease={decrease}
      
  />
  <Catego option={dropdown}
        setoption={setdropdown}/>

<div className="jersey-container">
  {filteredjerseys.map((jersey)=>(
    <div className="jersey-card" key={jersey.id}>
      <p> Team:{jersey.team}</p>
      <img   src={jersey.image} alt={jersey.team}
      style={{
    width: "220px",
    height: "220px",
    objectFit: "cover"
  }} />
  <select className="size-select"
  value={selectedSize[jersey.id] || ""}
  onChange={(e) =>
    setSelectedSize({
      ...selectedSize,
      [jersey.id]: e.target.value,
    })
  }
>
  <option value="">Select Size</option>
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
</select>


   <p>Category: {jersey.category}</p>
   
  
    <p> price:${jersey.price}</p>
      <button className="cart-btn" onClick={()=>addtocart(jersey)}>Add to cart</button>
    </div>
  ))}
  
</div>
  
  </>
)}
{page==="about"&&(
  <>
  <h3>Hi dear user</h3>
  <hr/>
  <section><strong>
    <h3>Hi dear user</h3>
  <hr/>
  <p>
Jerseyca is an online football jersey store where users can easily buy
their favorite national and club team jerseys. We provide high-quality
jerseys at affordable prices. Users can choose their favorite team,
select the size, add it to the cart, and place their order. The main
goal of Jerseyca is to provide football fans with the best jerseys of
their favorite teams.</p></strong>
</section>

<section>
  <p>
    At <p className="w">Jerseyca</p>, we are committed to providing premium-quality football jerseys
    with 100% trusted service. Every jersey is carefully selected to ensure
    comfort, durability, and style. We focus on giving our customers the best
    experience with secure payments, reliable support, and smooth shopping.
  </p>

  <p>
    Trust Jerseyca for fast and safe delivery right to your doorstep. We make
    sure your order reaches you on time with proper packaging and quality
    assurance. Our goal is to build trust with football fans by delivering
    authentic-looking jerseys and excellent customer satisfaction every time.
  </p>
</section>

  </>
)}
{page==="contact"&&(
<h3>contact us:<strong>9101648595</strong></h3>
)}
{page==="help"&&(
  <>
  <section>
    <h2>Help Center</h2>

    <p>
      Welcome to Jerseyca! Here you can easily browse and buy your favorite
      football jerseys. Use the search bar to find your team and filter by
      category such as national or club jerseys.
    </p>

    <p>
      Select your preferred size before adding a jersey to the cart. Once added,
      you can increase or decrease quantity, remove items, or clear the cart.
      We provide a smooth shopping experience with trusted service and fast delivery.
    </p>
  </section>
  <footer>Your trusted Owner of JERSEYCA---<strong>Kundann Upadhyaya</strong></footer>
  </>
)}
  </>
  
  
);
}






export default App;