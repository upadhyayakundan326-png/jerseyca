import react, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Routebtn from "./components/routebtn.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Help from "./components/help.jsx";
function App(){
return(
  <>
  <Routebtn/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/help" element={<Help/>}/>
  </Routes>
  



 </> 
)



}



export default App;