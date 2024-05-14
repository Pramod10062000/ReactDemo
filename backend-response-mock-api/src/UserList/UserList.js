import React from 'react';
function UsersList(props) {

    return (
        <div>
            <h2>Users</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope='col'>Id</th>
                        <th scope="col">Button</th>
                        <th scope='col'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Getusers.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td key={index}>{obj.state}</td>
                                <td key={index}>{obj.city}</td>
                                <td key={index}>{obj.id}</td>
                                <td><button onClick={() => { props.onDeleteHandler(obj.id) }} className='btn btn-danger'>Delete</button></td>
                                <td><button onClick={()=>{props.onClickHandler(index,obj.id)}} className='btn btn-primary'>Edit</button> </td>           
                            </tr>
                        )
                    })}


                </tbody>
            </table>

            {/* <h1>{Getusers[0].title}</h1>
            <h1>{Getusers[0].link}</h1> */}
        </div>
    );
}

export default UsersList;