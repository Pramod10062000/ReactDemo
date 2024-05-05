import { useState } from 'react';
import './App.css';
import FormInput from './FormInput/FormInput';
import List from './List/List';
function App() {
  const [getData, setData] = useState("");
  const [getList, setList] = useState([]);
  const[getEdit,setEdit]=useState(false);
  const[getIndex,setIndex]=useState(-1);
  const[getShow , setHide]=useState(false);


  //we are using this to add all the data received from the user input inside array we will use this array to display the data using map
  const onAddHandler = () => {
    setList([...getList, getData])
   
  }

  //we are using this to set the data received from user input into getData state variable
  const onChangeHandler = (input) => {
    setData(input);
    setHide(true);
  
  }

  const onDeleteHandler=(index)=>{
    alert("Data is deleted");
    let list=getList;
    list.splice(index,1)
    setList([...list])
  }
 

  const onEditHandler=(index)=>{
    setEdit(true);
    // console.log(getList[index]);
    setData(getList[index]);
    setIndex(index);
  }

  const onEditSubmit=()=>{
    let list=getList;
    list[getIndex]=getData;
    setList([...list]);
    setData('');
    setEdit(false)

  }
  return (
    <div>
      <FormInput valueData={getData}  onEditSubmit={onEditSubmit}    getEdit={getEdit} onAddHandler={onAddHandler} onChangeHandler={onChangeHandler} />
    { getShow && <List onEditHandler={onEditHandler}  onDeleteHandler={onDeleteHandler} data={getList} />}
    </div>
  );
}
export default App;
