import React from 'react';
import House from '../img/house.png';

const HomeStyle = {
  width: "740px",
  height: "87px",
  color: "white",
  backgroundColor: "#161616",
  position: "absolute",
  top: "0"
}


const HomeButton = () => (
  <section style={HomeStyle}>
    <a><img src={House} alt="homeButton" id="homeButton" /></a>
  </section>
)

export default HomeButton;