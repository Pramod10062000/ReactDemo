import './List.css';

const List = (props) => {
    return (
        <div className='List'>

            {/* <h1>{props.data.name}</h1>
            <h2>{props.data.skills}</h2>
            <h2>{props.data.exp}</h2>
            <h2>{props.data.loc}</h2> */}
            <ul>
                {
                    props.data.map(
                        (val,index) => {
                            return (
                                <div key={index}>
                                    <li>{val.name}</li>
                                    <li>{val.skills}</li>
                                    <li>{val.exp}</li>
                                    <li>{val.loc}</li>
                                </div>

                            )
                        }
                    )
                }
            </ul>
        </div>
    );
}
export default List;