import { useNavigate } from "react-router-dom";
import "../App.css";
function Routebtn(){
    const navigate=useNavigate();
   
return(
      <>
      <nav className="btn">
      <button className="routebtn" onClick={() => navigate("/")}>Home</button>
      <button className="routebtn" onClick={() => navigate("/about")}>About</button>
      <button className="routebtn" onClick={() => navigate("/contact")}>Contact</button>
      <button className="routebtn" onClick={() => navigate("/help")}>Help</button>
      </nav>
    </>
)}
export default Routebtn;
