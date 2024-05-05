import './FormInput.css';
const FormInput=(props)=>{
    return(
        <div className="FormInput">
            <input value={props.valueData} onChange={(event)=>{props.onChangeHandler(event.target.value)}} type="text"/>
           {props.getEdit?<button onClick={props.onEditSubmit}>Edit</button> : <button onClick={props.onAddHandler}>Add</button>}
        </div>
    );
}
export default FormInput