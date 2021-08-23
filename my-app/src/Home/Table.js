import React from 'react';
import Lamp from '../image/bestlite_2_desk_lamp_1.png';
import './HomeCss.css'

const DeskLamp = () =>{
    
    return (
        <div className="HomeSofa">
            <img src={Lamp} alt="" />
            <label>
            <h2>Dask Lamp</h2>
            <p>All Lamp products</p>
            </label>
        </div>
    )

}
export default DeskLamp
