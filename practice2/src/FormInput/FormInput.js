import './FormInput.css';
const FormInput=(props)=>{

    
    return(
        <div className="FormInput">
            <input onChange={(event)=>{props.onChangeHandler(event.target.value)}} type="text"/>
            <button onClick={()=>{props.onAddHandler()}}>Add</button>
        </div>
    );
}
export default FormInput