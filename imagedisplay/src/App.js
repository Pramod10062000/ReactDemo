import { useState } from 'react';
import './App.css';
import Image from './ImageList/Image';
import Modal from './Modal/Modal';

function App() {
  const[getFlag,setFlag]=useState(false);
  const[getIndex,setIndex]=useState(0);

  const onSelectHandler=(event)=>{
    setIndex(event.target.value);

    console.log(getIndex);
}

  const onCHangeHandler=()=>{
    setFlag(!getFlag);
  }
  return (
    <div className="App">
      <Image Id={getIndex} onCHangeHandler={onCHangeHandler}/>
      {getFlag && <Modal onSelectHandler={onSelectHandler} /> }
    </div>
  );
}

export default App;
