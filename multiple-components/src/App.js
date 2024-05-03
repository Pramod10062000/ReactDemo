import { useState } from 'react';
import './App.css';
import CounterButton from './CounterButton/CounterButton';
import CounterDisplay from './CounterDisplay/CounterDisplay';
import Counter from './CounterInput/Counter';
function App() {
  const onIncrementHandler=()=>{
    setVal(getVal+1);  
}
const onDecrementHandler=()=>{
  setVal(getVal-1);  
}
const onChangeHandler=(input)=>{
  setVal(input);
}

  const[getVal,setVal]=useState(0);
  return (
    <div className="App">
      <Counter onChangeHandler={onChangeHandler}/>
      <CounterButton onIncrementHandler={onIncrementHandler} onDecrementHandler={onDecrementHandler} />
      <CounterDisplay val={getVal} />

    </div>
  );
}
export default App;
