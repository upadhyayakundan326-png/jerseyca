function Navbar(props){
return(
    <nav> 
        <input
        className="nav"
        type="text"
        placeholder="Enter your jersey"
        value={props.search}
        onChange={(e)=>props.setsearch(e.target.value)}
        />





        
    </nav>
)
}
export default Navbar;