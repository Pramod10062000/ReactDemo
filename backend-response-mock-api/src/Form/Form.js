import './Form.css';
const Form = (props) => {
    
  
    return (
        
        <form>
            <h1>{props.getDataForBinding.city}</h1>
            
            <div class="form-group">
                <label>City</label>
                <input   type="text" onChange={props.onChangeHandler} name='city' className="form-control" aria-describedby="emailHelp" placeholder="Enter City" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label>State</label>
                <input   name='state' onChange={props.onChangeHandler} type="text" className="form-control" placeholder="Link" />
            </div>
            <div class="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">Check me out</label>
            </div>
            {
            props.getStatus?<button onClick={props.onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>:
            <button type="submit" onClick={props.onEditSubmitHandler} className="btn btn-primary">Edit</button>
            }
        </form>
    )
}
export default Form;