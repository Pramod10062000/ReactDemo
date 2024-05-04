import './ColorSelector.css';

const ColorSelector = (props) => {
    const onClickHandler=()=> {
        props.onSelect(props.color)
    }



    return (

        <div onClick={onClickHandler} style={{ backgroundColor: props.color }} className='ColorSelector'>
            <h5></h5>
        </div>

    );

}
export default ColorSelector