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


  showAlert() {
   this.setState({
     animation: !this.state.animation
   })
  }

  render() { 
    return (
      <a onClick={this.showAlert} className={ this.state.animations}><img src={Bottle} alt="BottleSpinner" className="bottleSpinner" /></a>
    )
  }
}

export default BottleSpinner;

