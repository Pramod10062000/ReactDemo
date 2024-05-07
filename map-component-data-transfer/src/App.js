import { useState } from 'react';
import './App.css';
import FormInput from './FormInput/FormInput';
import List from './List/List';
function App() {
  const[getD,setD]=useState([]);
  const onChangeHandler = (event) => {
  setData({...canData,[event.target.name]:event.target.value});
}
const onSubmitHandler=()=>{
  setD([...getD,canData]);
  console.log(getD);
}


  const[canData,setData]=useState({
    name:'',
    skills:'',
    exp:'',
    loc:''
  });


  return (
    <div className="App">
      <FormInput onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
      <List data={getD}/>
    </div>
  );
}

export default App;
