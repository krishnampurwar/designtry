import React, { useState, useEffect } from 'react';
import Icon from './components/icons/icons';
import Form from './components/form/form';
import img from './logo192.png'
import Lookscout from './assests/Lookscout.png'
import Lookscout1 from './assests/Lookscout (1).png'
import icon from './assests/Icon.png';
import icon2 from './assests/Icon (2).png';
import icon3 from './assests/Icon (3).png';
import icon1 from './assests/Icon (1).png';
import { useMediaPredicate } from "react-media-hook";
import './App.css'
 const App = () => {

  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'
 
  return(
  <div className='container'>
    {preferredTheme == 'dark' ? <img className='logo' src={Lookscout1} />  : <img className='logo' src={Lookscout} />   }
    
    <div className='box'>
      <div className='iconbox'>
        <Icon img={icon} title={'Account'} />
        <Icon img={icon1} title={'Personal'} />
        <Icon img={icon2} title={'billing'} />
        <Icon img={icon3} title={'Done'} />
      </div>
      <div className='form'>
        <Form />
      </div>
    </div>
  </div>
   
  )
}
export default App;