import React from "react";
import "../css/Slots.css";
import car from "../images/available-image.png"

function Slots() {
    return(
        <div className="slots">
            <h1>Parking Slots Availability</h1>
            <div  className="slots-container">
            <div className="slot-single">
            {/* <img src={car}/> */}
            <img src="https://img.icons8.com/external-prettycons-flat-prettycons/350/fa314a/external-car-car-parts-vehicles-prettycons-flat-prettycons-5.png"/>
            <h2>Slot 1</h2>
            </div>
            <div className="slot-single">
            <img src={car}/>
            {/* <img src="https://img.icons8.com/external-prettycons-flat-prettycons/350/fa314a/external-car-car-parts-vehicles-prettycons-flat-prettycons-5.png"/> */}
            <h2>Slot 2</h2>
            </div>
            <div className="slot-single">
            {/* <img src={car}/> */}
            <img src="https://img.icons8.com/external-prettycons-flat-prettycons/350/fa314a/external-car-car-parts-vehicles-prettycons-flat-prettycons-5.png"/>
            <h2>Slot 3</h2>
            </div>
            <div className="slot-single">
            <img src={car}/>
            {/* <img src="https://img.icons8.com/external-prettycons-flat-prettycons/350/fa314a/external-car-car-parts-vehicles-prettycons-flat-prettycons-5.png"/> */}
            <h2>Slot 4</h2>
            </div>
            <div className="slot-single">
            {/* <img src={car}/> */}
            <img src="https://img.icons8.com/external-prettycons-flat-prettycons/350/fa314a/external-car-car-parts-vehicles-prettycons-flat-prettycons-5.png"/>
            <h2>Slot 5</h2>
            </div>
            </div>
        </div>
    )
}

export default Slots;