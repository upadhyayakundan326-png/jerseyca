function Catego(props){
     return(
        <select className="category"
          value={props.option}
      onChange={(e) => props.setoption(e.target.value)}>

            <option value="All" 
            
            
            > All </option>

                 <option value="national"> National</option>
                      <option value="club"> club </option>
        </select>
     )
}
export default Catego;