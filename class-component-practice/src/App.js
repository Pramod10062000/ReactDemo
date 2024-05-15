import { Component } from "react";



class App extends Component{

  constructor(props){
    super(props)
    this.state={
      counter:0
    }
  }
 incrementHander=()=>{
  this.setState({
    counter:this.state.counter+1
  })
 }
 DecrementHander=()=>{
  this.setState({
    counter:this.state.counter-1
  })
 }



render(){
const Style={
  textAlign:"Center",
  margin:"auto"
}

  return(
    <div style={Style}>
      <h1>Counter:{this.state.counter}</h1>
      <button onClick={this.incrementHander}>Inc</button>
      <button onClick={this.DecrementHander}>Dec</button>
    </div>
  )
}
}
export default App