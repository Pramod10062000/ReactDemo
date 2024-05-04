import './Child1.css';
const Child1 = (props) => {

    // const onClickHandler = (props) => {
    //    props.onSetHandler(props.name);
    // }
    return (
        <div className='Child1'> 

            <h2>{props.nameofChild}</h2>
            <button onClick={()=>{props.onSetHandler(props.nameofChild)}}>Pass Data</button>


        </div>

    )
}
export default Child1;