import { useState } from 'react';
import './App.css';
import ColorSelector from './ColorSelector/ColorSelector';
import Selector from './Selection/Selector';
function App() {
  const [getBackground, setBackground] = useState({
    background:''
  })

  const[getSelection,setSelection]=useState([{id:0,background:''},{id:1,background:''},{id:2,background:''}])


  const onSelectHandler = (input) => {
    setBackground({ background:input })
  }

  const applyColor=(id)=>{
    let list=getSelection[id];
    list.background=getBackground.background;
    setSelection([...getSelection,list]);

  }
  return (
    <div className="App">
      {
        <div>
          {/* <Block/>
          <Block/>
          <Block/> */}
          <div>
            <ColorSelector onSelect={onSelectHandler} color="red" />
            <ColorSelector onSelect={onSelectHandler} color="green" />
            <ColorSelector onSelect={onSelectHandler} color="orange" />
          </div>
          <div>
            <Selector applyColor={applyColor}  id="0"  getBackground={getSelection[0].background} />
            <Selector applyColor={applyColor}  id="1"  getBackground={getSelection[1].background}/>
            <Selector applyColor={applyColor}  id="2"  getBackground={getSelection[2].background} />
          </div>

        </div>
      }

    </div>
  );
}

export default App;
