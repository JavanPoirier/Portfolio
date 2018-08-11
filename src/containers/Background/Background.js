import React, { Component } from 'react';
import Particles from 'react-particles-js';

import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import particlesjs from './particlesjs';

const Container = styled.div`
  position: fixed;
  width: ${window.innerWidth + "px"};
  height: ${window.innerHeight + "px"};
  z-index: -1000;
`

export default class Background extends Component {

  constructor() {
    super();
    
    // this.updateParticlesValue = this.updateParticlesValue.bind(this);
  }

  // //Dynamicly updates the value of particles based on screen resolution
  // updateParticlesValue() {
  //   const base = 1440000;
  //   const value = 50;

  //   var h = window.screen.height;
  //   var w = window.screen.width;
  //   var res = h * w;

  //   var percent = res / base;
  //   particlesjs.particles.number.value = (value * percent);
  // }

  // componentWillUpdate(){
  //   this.updateParticlesValue();
  // }

  // componentWillMount(){
  //   this.updateParticlesValue();
  // }

  render() {
    return (
      <Container id="Background">
        <Parallax
          offsetYMax={0}
          offsetYMin={-10}
          slowerScrollRate
        >
          <Particles params={particlesjs}/>
        </Parallax>
      </Container>
    );
  }
}
