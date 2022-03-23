import React from "react";
import "../css/Slots.css";
import redCar from "../images/red-car.jpg"
import blueCar from "../images/blue-car.jpg"
import greenCar from "../images/green-car.jpg"
import greyCar from "../images/grey-car.jpg"
import purpleCar from "../images/purple-car.jpg"
import lGreenCar from "../images/light-green-car.jpg"
import parking from "../images/parking.jpg"
import axios from "axios";
import { useEffect,useState } from "react";
function Slots() {
    const [slot1,setSlot1]=useState(false);
    const [slot2,setSlot2]=useState(false);
    const [slot3,setSlot3]=useState(false);
    const baseUrl = "https://io.adafruit.com/api/v2/Manikandan1212/feeds";
    // const baseUrl2 = "https://io.adafruit.com/api/v2/ShakthiGanesh/feeds";
    // const baseUrl3 = "https://io.adafruit.com/api/v2/Kasiram/feeds";
    useEffect(() => {
        axios.get(baseUrl+"/entryslot1").then(res => {
            res.data.last_value=="0"?setSlot1(false):setSlot1(true);
        });
        axios.get(baseUrl+"/entryslot2").then(res => {
            res.data.last_value=="0"?setSlot2(false):setSlot2(true);
        });
        axios.get(baseUrl+"/entryslot3").then(res => {
            res.data.last_value=="0"?setSlot3(false):setSlot3(true);
        });    
}, [])
    //Slot update
    useEffect(() => {
      console.log("Slot1"+slot1);
      console.log("Slot2"+slot2);
      console.log("Slot3"+slot3);
    }, [slot1,slot2,slot3])
    return(
        <div className="slots">
            <h1>Smart Parking System</h1>
            <div className="dia">
            <div className="divider"></div>
            <div className="lane">
            <div className="slot-single-left">
            <p>1</p>
             {slot1==false?<img src={parking}></img>:<img src={purpleCar}></img>}
                
              
            </div>
            <div className="slot-single-right">
          
            {slot2==false?<img src={parking}></img>:<img src={redCar}></img>}
                
                <p>2</p>
            </div>
            </div>
            <div className="lane">
            <div className="slot-single-left">
            <p>3</p>
            {slot3==false?<img src={parking}></img>:<img src={blueCar}></img>}
              
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
          
                <img src={greyCar}></img>
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
