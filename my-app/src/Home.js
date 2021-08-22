/* eslint-disable no-sequences */
import React,{useState} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
 import Image from './image/home8-slider1-img1.png';
 import Image2 from './image/home8-slider2-img1.png';
// import Image3 from './image/home8-slider1-img1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//import Name from './data';
let a= <><img src={Image2} alt='' /> 
         <h1> welcom</h1>
         </>;
let b = <><img src={Image} alt='' style={{ width:'300px'}} /> 
          <h1> third</h1></>
let c = <><img src={Image2} alt='' style={{ width:'300px'}} /> 
          <h1> second</h1></>

const UseStateBisc = () => {
  const add = () =>{
      return b;

  }
  const app = () =>{
      return c

  }
  const apk= () =>{
    return a;
  }
  const textg = () =>{
    return ( 'Hello',
    <img src={Image} alt='' style={{ width:'300px'}}/>
    )
  }
  const [text, setText] = useState(textg);
  const clickMe = (e) => {
    e.preventDefault();
      if (text === a){
          setText(add)
      }
      else if(text === b){
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
