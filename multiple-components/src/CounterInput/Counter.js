
const Counter=(props)=>{

    const onChangeHandler=(event)=>{
        props.onChangeHandler(parseInt(event.target.value));
    }
    return(
        <div>
            <div>
        <p>Please Enter the value</p>
        <input onChange={onChangeHandler} type="text"/>

            </div>


        </div>  


    );

}
export default Counter;