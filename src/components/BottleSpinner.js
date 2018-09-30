import React from 'react';
import Bottle from '../img/spin_bottle_mockup-4.png';



/* Create styled div with keyframes and animation function */

class BottleSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: false
    }
    this.showAlert = this.showAlert.bind(this);
  }


  showAlert () {
    setTimeout(() => {
      this.setState({
        animation: !this.state.animation
      })
    }, 8000);
  }


  render() { 
    return (
      <img onClick={this.showAlert} src={Bottle} alt="BottleSpinner"  className={this.state.animation ? "bottleSpinnerSpin" : "bottleSpin"} />
    )
  }
}

export default BottleSpinner;

