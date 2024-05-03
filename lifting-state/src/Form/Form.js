import { useState } from 'react';
import './Form.css';
function Form(props){

    const onSubmitHandler=()=>{
        props.handler(getData);

    }

    const onChangeHandler=(event)=>{
      setData({...getData,[event.target.name]:event.target.value})
    }

    const[getData,setData]=useState({
        name:"Name",
        matches:"0"
    });
return(
    <div>
<div className="Form">
    <h1>Hello world</h1>
    Enter name:<input name='name' onChange={onChangeHandler}  type="text"/>
    <br/>
    Enter Matches<input type="text" onChange={onChangeHandler}  name='matches'/>
    <button onClick={onSubmitHandler}>Submit</button>
</div>
</div>
)
}
export default Form;