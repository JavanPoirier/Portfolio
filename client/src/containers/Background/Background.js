import React, { Component } from 'react';
import Particles from 'react-particles-js';

import particlesjs from './particlesjs';
import { Parallax } from 'react-scroll-parallax';

export default class Background extends Component {
  constructor() {
    super();
    
    this.parallax = React.createRef();
    this.updateParticlesValue = this.updateParticlesValue.bind(this);
  }

  //Dynamicly updates the value of particles based on screen resolution
  updateParticlesValue() {
    const base = 1440000;
    const value = 50;

    var h = window.screen.height;
    var w = window.screen.width;
    var res = h * w;

    var percent = res / base;
    particlesjs.particles.number.value = (value * percent);
  }

  componentWillUpdate(){
    this.updateParticlesValue();
  }

  componentWillMount(){
    this.updateParticlesValue();
  }

  render() {
    const style = {
      position: "fixed",
      zIndex: "-1000"
    }

    return (
      <div id="background" style={style}>
        <Parallax ref={(el) => {this.parallax = el}}
          className="custom-class"
          offsetYMax={0}
          offsetYMin={-10}
          slowerScrollRate
          tag="figure"
        >
          <Particles params={particlesjs}/>
        </Parallax>
      </div>
    );
  }
}
