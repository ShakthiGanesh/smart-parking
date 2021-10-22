import React from "react";
import "../css/Slots.css";
import redCar from "../images/red-car.jpg"
import blueCar from "../images/blue-car.jpg"
import greenCar from "../images/green-car.jpg"
import greyCar from "../images/grey-car.jpg"
import purpleCar from "../images/purple-car.jpg"
import lGreenCar from "../images/light-green-car.jpg"
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
          
                <img src={blueCar}></img>
                <p>2</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>3</p>
                <img src={blueCar}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={greenCar}></img>
                <p>4</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>5</p>
                <img className="purple-car" src={lGreenCar}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={parking}></img>
                <p>6</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>7</p>
                <img src={redCar}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={greenCar}></img>
                <p>8</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>9</p>
                <img src={purpleCar}></img>
              
            </div>
            <div className="slot-single-right">
          
                <img src={greyCar}></img>
                <p>10</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Slots;