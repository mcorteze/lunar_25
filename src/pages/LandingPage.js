import React from 'react';
import { Parallax } from 'react-parallax';
import './LandingPage.css';

const image1 = require('../images/landingpage001.jpg');
const image2 = require('../images/landingpage002.jpg');
const image3 = require('../images/landingpage003.jpg');

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export default function LandingPage() {
  return (
    <div style={styles}>
      <h1>Parallax Example</h1>
      <Parallax bgImage={image1} strength={300} className="parallax-container-1">
        <div style={{ height: 922 }}></div>
      </Parallax>
      <Parallax bgImage={image2} strength={500} className="parallax-container-2">
        <div style={{ height: 566 }}></div>
      </Parallax>
      <Parallax bgImage={image3} strength={500} className="parallax-container-3">
        <div style={{ height: 1000 }}></div>
      </Parallax>
    </div>
  );
}
