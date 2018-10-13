import React, { Fragment } from "react";
import Bottle from "../img/spin_bottle_mockup-4.png";

/* Create styled div with keyframes and animation function */

class BottleSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      position: 0,
      positionEnd: 0
    };
  }

  SPEED = 360;

  animationStart = () => {
    if (this.state.animation) return;
    const duration = 1 + Math.random() * 6;
    this.setState({
      duration,
      positionEnd: this.state.position + duration * this.SPEED
    });
  };

  animationEnd = () => {
    console.log("animation end", this.state.positionEnd);
    this.setState({ duration: 0, position: this.state.positionEnd });
  };

  render() {
    const bottleStyle = {
      transform: `rotate(${this.state.position}deg)`,
      ...(this.state.duration
        ? { animation: `bottleSpin ${this.state.duration}s` }
        : {})
    };
    return (
      <Fragment>
        <style>{`
@keyframes bottleSpin {
  0% {
    transform: rotate(${this.state.position}deg);
  }
  100% {
    transform: rotate(${this.state.positionEnd}deg);
  }
}`}</style>
        <img
          onClick={this.animationStart}
          src={Bottle}
          alt="BottleSpinner"
          className="bottleSpin"
          style={bottleStyle}
          onAnimationEnd={this.animationEnd}
        />
      </Fragment>
    );
  }
}

export default BottleSpinner;


