import React from "react";
import "../css/Slots.css";
import car from "../images/available-image.png"
import parking from "../images/parking.jpg"

function Slots() {
    return(
        <div className="slots">
            <h1>Smart Parking System</h1>
            <div className="dia">
            <div className="divider"></div>
            <div className="lane">
            <div className="slot-single-left">
            <p>1</p>
                <img src={parking}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={parking}></img>
                <p>2</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>1</p>
                <img src={parking}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={parking}></img>
                <p>2</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>1</p>
                <img src={parking}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={parking}></img>
                <p>2</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>1</p>
                <img src={parking}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={parking}></img>
                <p>2</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>1</p>
                <img src={parking}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={parking}></img>
                <p>2</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Slots;