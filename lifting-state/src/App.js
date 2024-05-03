import { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import List from './List/List';

function App() {


  const onGetHandler=(input)=>{
  console.log(input)
    setGlobal(input);
  }

  const [getGlobal,setGlobal]=useState({
    name:"",
    matches:""
  })
  return (
    <div className="App">
     <Form handler={onGetHandler}/>
     <List nameofPlayer={getGlobal.name} match={getGlobal.matches}/>
    </div>
  );
}

export default App;
