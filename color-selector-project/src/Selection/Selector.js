import './Selector.css';
const Selector = (props) => {

    const onClickHandler=()=>{
       props.applyColor(props.id)
    }
    return (
        <div onClick={onClickHandler} style={{backgroundColor:props.getBackground}} className='Selector'>
            <h5>Selector</h5>
        </div>
    );
}
export default Selector;

//style={{ backgroundColor: props.color }}