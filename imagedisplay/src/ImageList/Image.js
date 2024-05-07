import image from '../Image/Image';
// import img from '../assets/Images/form_logo.png';
import './Image.css';
 const Image=(props)=>{
   
    return(
        <div className="Image">
            <img onClick={props.onCHangeHandler} src={image[props.Id].src}/>
        </div>
    );

    
 }
 export default Image;
