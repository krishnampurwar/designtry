import React from "react";
import img from '../../logo192.png'
import './icons.css'
const icon = (props) => {
    return(
       <div className="iconcontainer">
        <img className="icon" src={props.img} />
        <p className="para">{props.title}</p>
       </div>
    )
}
export default icon;