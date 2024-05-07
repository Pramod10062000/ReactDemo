
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './Model.css';
const Modal=(props)=>{
    
    const[getList,setList]=useState(['image1','image2','image3','image4','image5']);
    const rootElement=document.getElementById("element-root");
    return ReactDOM.createPortal(
    <div className='Modal'>
        <select onChange={props.onSelectHandler}>
            {   
                getList.map((obj,index)=>{
                    return(
                        <option value={index} key={index} >{obj}</option>
                    )
                })

            }
        </select>
    </div>,rootElement)
    
}
export default Modal;