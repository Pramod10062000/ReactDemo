import './List.css';

const List = (props) => {
    return (
        <div className="List">
            <ul>

                {
                    props.data.map((data, key) => {
                        return (
                            <div className='DataInsideList' key={key}>
                                <li key={key}>{data}</li>
                                <button onClick={()=>{props.onEditHandler(key)}}>Edit</button>
                                <button onClick={()=>{props.onDeleteHandler(key)}}>Delete</button>
                          
                                

                            </div>

                        )
                    })
                }



            </ul>
        </div >
    );
}
export default List;
