import './FormInput.css';
const FormInput = (props) => {
    
   
    return (
        <div className="FormInput">

            <label>
                Enter your name: <input  onChange={props.onChangeHandler} type="text" name="name" />
            </label>
            <label>
                Enter your skills:<input onChange={props.onChangeHandler} type="text" name="skills" />
            </label>
            <label>
                Enter your Experience:<input  onChange={props.onChangeHandler} type="text" name="exp" />
            </label>
            <label>
                Enter your preffered location:<input onChange={props.onChangeHandler}  type="text" name="loc" />
            </label>
            <button onClick={props.onSubmitHandler}>Submit</button>

        </div>
    )
}
export default FormInput;