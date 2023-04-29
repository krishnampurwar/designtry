import React from "react";
import './form.css'
import { Button } from "react-bootstrap";
const Form = () => {
    return(
       <div className="formbox">
       
         <div className="namebox">
            <p className="title">Name</p>
            <div className="inputbox">
         <input type="text" className="input" placeholder="John  Baryan "></input>
         <p className="i">i</p>
         </div> 
         </div>
         <div className="namebox">
            <p className="title">Email Address*</p>
            <div className="inputbox">
         <input type="email" required className="input" placeholder="Email "></input>
         <p className="i">i</p>
         </div> 
         <p className="text">Please input a real Email Address </p>
         </div>
         <div className="passbox">
         <div className="namebox">
            <p className="title">Password*</p>
            <div className="pasbox">
         <input type="password" required className="input" placeholder="password"></input>
         <p className="i">i</p>
    
         </div> 
         <p className="text">Please enter ypur password</p>
         </div>
         <div className="namebox">
            <p className="title">Confirm password*</p>
            <div className="pasbox">
         <input type="passsword" required className="input" placeholder="password"></input>
         <p className="i">i</p>
         </div> 
         <p className="text">password need to match</p>
         </div>
         </div>
         <div className="checkbox">
            <input type="checkbox"  className="check"></input>
            <p className="ctext" required>I accept the Terms and Privacy Policy</p>
         </div>
         <div className="btnbox">
            <button className="btn">Next ></button>
         </div>
       </div>
    )
}
export default Form;