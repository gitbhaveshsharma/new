/* eslint-disable no-sequences */
import React,{useState} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
 import Image from './image/home8-slider1-img1.png';
 import Image2 from './image/home8-slider2-img1.png';
// import Image3 from './image/home8-slider1-img1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//import Name from './data';
let a='he5llo';

const UseStateBisc = () => {
  const add = () =>{
      return 'hello hi';
  }
  const app = () =>{
      return 'app';
  }
  const apk= () =>{
    return 'he5llo';
  }
  const textg = () =>{
    return 'Hello'
  }
  const [text, setText] = useState(textg);
  const clickMe = (e) => {
    e.preventDefault();
      if (text === a){
          setText(add)
      }
      else if(text === 'hello hi'){
             setText(app)
      }
      else{
          setText(apk)
      }
  }
 return (
     <React.Fragment>
         <h1>{text}</h1>
         <button type="button" className='btn' onClick={clickMe} > 
         Click </button>
     </React.Fragment>
 )
};
export default UseStateBisc;
