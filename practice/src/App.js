import { useState } from 'react';
import './App.css';
import Child1 from './Child1/Child1';
import Child2 from './Child2/Child2';
function App() {
  const [getData, setData] = useState({
    child1Name: 'Def',
    Child2Name: 'Def'
  });
  const onSetHandler = (nameofChild) => {
    setData({ ...getData, child1Name: nameofChild });
  }
  const onSetHandler2 = (nameofChild) => {
    setData({ ...getData, Child2Name: nameofChild });
  }

  return (
    <div className="App">
      <Child1 onSetHandler={onSetHandler} nameofChild="mona" />
      <Child2 onSetHandler={onSetHandler2} nameofChild="Pramod" />
      <div className='List'>
        <h1>{getData.child1Name}</h1>
        <h2>{getData.Child2Name}</h2>
      </div>

    </div>
  );
}

export default App;
