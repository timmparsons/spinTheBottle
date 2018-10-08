import React from 'react';
import Bottle from '../img/spin_bottle_mockup-4.png';

/* Create styled div with keyframes and animation function */

const bottleSpinnerSpin = {
  position: 'relative',
  top: '-475px',
  height: '350px'
}


class BottleSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationName: ''
    };
    this.rotate = this.rotate.bind(this);
  }

  rotate(){
    let bottleElem = document.getElementById("bottleElem");
    let spinTime = (Math.floor(Math.random() * 500) + 1);
    console.log(spinTime);
    bottleElem.style.animation = "bottleSpin 10s";
  }

  alert() {
    alert("Pick a number");    
  }

  render() {
    return (
      <div>
       <img style={bottleSpinnerSpin} src={Bottle} onClick={this.rotate} id="bottleElem" alt="spinning-bottle" />
    </div>
    )  
  }
}


export default BottleSpinner;

