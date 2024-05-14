import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form/Form';
import UsersList from './UserList/UserList';
function App() {
  const [getDataForBinding, setDataforBinding] = useState({
    city:'',
    state:''
  })
  const [getData, setData] = useState({
    city: '',
    state: ''
})

  const[getStatus,setStatus]=useState(true);

  const [Getusers, setUsers] = useState([]);

  const[getId,setId]=useState();


  const InitialData = () => {
    try {
        axios.get('http://localhost:3000/data').then((response) => {
            setUsers([...response.data]);
        }).catch((error) => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    InitialData();
}, [setUsers])


const onChangeHandler = (event) => {
    setData({
        ...getData,
        [event.target.name]: event.target.value
    })
}
const onSubmitHandler = (event) => {
  event.preventDefault();
  axios.post('http://localhost:3000/data', getData).then((response) => {
    InitialData();
      console.log(response.data)
  })
}
 
const onEditSubmitHandler = (event) => {
  event.preventDefault();
  axios.patch(`http://localhost:3000/data/${getId}`, getData).then((response) => {
    InitialData();
      console.log(response.data)
  })
}

 

  const onClickHandler=(index,id)=>{
    setStatus(!getStatus);
    setId(id);
    // console.log(id,index)
    // console.log(Getusers[index].city,Getusers[index].state);
    setDataforBinding({
      city:Getusers[index].city,
      state:Getusers[index].state
    })
    // console.log(Getusers[index].city)
    // console.log(Getusers[index].state)
  
  
  }
  const onDeleteHandler=(id)=>{
    axios.delete(`http://localhost:3000/data/${id}`).then(
      (response)=>{
        InitialData();
        console.log(response.data)
      }
    ).catch((error)=>{
      console.log(error)

    })
  }
  const [getFlag, setFlag] = useState(false);
  const [showData, hideData] = useState(false);

  const statesData = [
    {
      name: "Maharashtra",
      cities: [
        {
          name: "Mumbai",
          towns: [{ town: "Andheri" }, { town: "Bandra" }, { town: "Dadar" }]
        },
        {
          name: "Pune",
          towns: [{ town: "Kothrud" }, { town: "Shivajinagar" }, { town: "Wakad" }]
        }
      ]
    },
    {
      name: "Tamil Nadu",
      cities: [
        {
          name: "Chennai",
          towns: [{ town: "Anna Nagar" }, { town: "T. Nagar" }, { town: "Adyar" }]
        },
        {
          name: "Coimbatore",
          towns: [{ town: "Gandhipuram" }, { town: "Peelamedu" }, { town: "RS Puram" }]
        }
      ]
    },
    {
      name: "Karnataka",
      cities: [
        {
          name: "Bengaluru",
          towns: [{ town: "Koramangala" }, { town: "Indiranagar" }, { town: "Whitefield" }]
        },
        {
          name: "Mysuru",
          towns: [{ town: "Vijayanagar" }, { town: "Kuvempunagar" }, { town: "Saraswathipuram" }]
        }
      ]
    }
  ];
  return (
    <div className="App">
      <Form getDataForBinding={getDataForBinding}  getStatus={getStatus}   onChangeHandler={onChangeHandler} onEditSubmitHandler={onEditSubmitHandler} onSubmitHandler={onSubmitHandler}/>
      <UsersList onDeleteHandler={onDeleteHandler} onClickHandler={onClickHandler}  Getusers={Getusers}  setUsers={setUsers}/>
      {/* <ol>
        {
          statesData.map((Stateobj, index) => {
            return (
              <div>
                <li onClick={() => { setFlag(!(getFlag)) }} key={index}>{Stateobj.name}</li>
                <ol>
                  {
                    getFlag && Stateobj.cities.map((cityObj, index) => {
                      return (

                        <div>
                          <li onClick={() => { hideData(!(showData)) }} key={index * 2}>{cityObj.name}</li>
                          <ol>
                            {
                              showData && cityObj.towns.map((townObj, index) => {
                                return (
                                  <div key={index}>
                                    <li>{townObj.town}</li>
                                  </div>
                                )
                              })
                            }
                          </ol>
                        </div>
                      )

                    })

                  }
                </ol>
              </div>
            )


          })


        }



      </ol> */}


    </div>
  );
}

export default App;
