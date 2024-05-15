import { Component } from "react";

import axios from "axios";
import Form from "./Form/Form";
import Table from './Table/Table';
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      list:[],
      form:{
        product:'',
        amount:''
      }
    }
  }
  componentDidMount(){
    this.getInitial();
  }

getInitial=()=>{
  try{
    axios.get("http://localhost:3000/products").then(
      (resp)=>{
        console.log(resp.data)
        this.setState({list:resp.data })
      }
    ).catch((eror)=>{
      console.log(eror)
    })

  }catch(error){
    console.log(error)

  }
}

onChangeHandler=(event)=>{
  this.setState({
    form:{
      ...this.state.form,[event.target.name]:event.target.value
    }
  })
}

onSubmitHandler= async (event)=>{
  event.preventDefault();
  try{
let res = await axios.post("http://localhost:3000/products",this.state.form)
this.getInitial();
console.log(res);
  }catch(err){
    console.log(err)
  }
 
}

  render() {
    return (
      <div>
        <Form onSubmitHandler={this.onSubmitHandler}  onChangeHandler={this.onChangeHandler}/>
       {this.state.list && this.state.list.length>0 && <Table list={this.state.list} />}
      </div>


    )
  }
}
export default App