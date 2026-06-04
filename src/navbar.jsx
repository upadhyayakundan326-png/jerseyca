function Navbar(props){
return(
    <nav>
        <h2>Wear your colour Own the Game </h2>
        <input
        type="text"
        placeholder="Enter your jersey"
        value={props.search}
        onChange={(e)=>props.setsearch(e.target.value)}
        />





        
    </nav>
)
}
export default Navbar;