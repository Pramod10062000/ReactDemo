import { useState } from 'react';
import './App.css';
import FormInput from './FormInput/FormInput';
import List from './List/List';
function App() {
  //this state can hold only single latest updated value and old values will be discarded single we have declared it in that way 
  //single string vale
  const [getData, setData] = useState("");
  // here we are creating the copy on the state values received from user as input so that we can pefrom crud on it 
  // Array of values
  const [getList, setList] = useState([]);
//this state is used for conditional rendering of edit button
//boolean single value at a time 
  const[getEdit,setEdit]=useState(false);
  // this state is used to save the index where crud op is needed to be performed so that values at that index can be manipulated
//single index value 
  const[getIndex,setIndex]=useState(-1);
  //this state is used for conditional rendering of List component based on wheter the users gives input or not
  //single boolean value
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
      {getShow && <List onEditHandler={onEditHandler}  onDeleteHandler={onDeleteHandler} data={getList} />}
    </div>
  );
}
export default App;
