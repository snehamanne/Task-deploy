function Teena(){
    var names=["Umeera","Swarupaa","Alekya","Shruthi"];
    return(
        <ul>
           {names.map((names,index)=>{
            return <li key={index}>{names}</li>
           })}
            
        </ul>
    )
}
export default Teena;