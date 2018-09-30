import React from 'react';
import Cardboard from '../img/Cardboard.png';
import HomeButton from './HomeButton';
import SpinIt from './SpinIt';
import DividerIcon from './DividerIcon';
import MainText from './MainText';
import BottleCircle from './BottleCircle';

const backgroundStyle = {
  width: "740px",
  height: "100%",
  backgroundImage: `url(${Cardboard})`
}
const SpinnerApp = () => (
  <section style={backgroundStyle} className="SpinnerApp">
    <HomeButton />
    <SpinIt />
    <DividerIcon />
    <MainText />
    <BottleCircle />
  </section>
)


export default SpinnerApp;