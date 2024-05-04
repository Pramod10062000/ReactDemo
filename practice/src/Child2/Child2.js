import './Child2.css';
const Child2=(props)=>{
  
    return(
    <div className='Child2'>
        
        <h1>{props.nameofChild}</h1>
        <button onClick={()=>{props.onSetHandler(props.nameofChild)}}>Pass Data</button>
    </div>

    )
}
export default Child2;