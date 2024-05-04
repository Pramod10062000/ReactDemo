import { useState } from 'react';
import './App.css';
import FormInput from './FormInput/FormInput';
import List from './List/List';
function App() {
  const [getData, setData] = useState(0);
  const [getList, setList] = useState([]);
  const onChangeHandler = (input) => {
    setData(input);
  }


  const onDeleteHandler=(index)=>{
    alert("Data is deleted");
    let list=getList;
    list.splice(index,1)
    setList([...list])

  }

  const onAddHandler = () => {
    setList([...getList, getData])
    console.log(getList)
  }
  return (
    <div>
      <FormInput onAddHandler={onAddHandler} onChangeHandler={onChangeHandler} />
      <List onDeleteHandler={onDeleteHandler} data={getList} />
    </div>
  );
}

export default App;
