
const CounterButton=(props)=>{

    return(
        <div>
        <div>
       
            <button onClick={props.onIncrementHandler}>Increment</button>
            <br/>
            <button onClick={props.onDecrementHandler}>Decrement</button>
        </div>

    </div>
    );

}

export default CounterButton;