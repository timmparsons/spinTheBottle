import React from 'react';
import BottleFlight from '../img/flight-circle.png';
import BottleSpinner from './BottleSpinner';


const BottleCircle = () => (
  <div className="bottleCircleSection">
    <img src={BottleFlight} alt="bottle-circle" id="bottleCircle" />
      <BottleSpinner />
  </div>
)

export default BottleCircle;