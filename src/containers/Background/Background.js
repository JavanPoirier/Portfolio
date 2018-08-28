import React, { Component } from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import Particles from 'react-particles-js';

import particlesjs from './particlesjs';

const Container = styled.div`
  position: fixed;
  z-index: -1000;
  width: 100%;
  height: 100%;

  /* Update canvas size on resize */
  canvas {
    height: ${(props) => props.height ? (props.height + "px") : (window.innerHeight + "px")} !important;
    width: ${(props) => props.width ? (props.width + "px") : (window.innerWidth + "px")} !important;
  }
`

export default class Background extends Component {
  constructor() {
    super();

    this.state = {
      height: null,
      width: null,
    }

    this.resize = this.resize.bind(this);
  }

  componentWillMount() {
    this.updateParticlesValue();
  }

  //Dynamicly updates the value of particles based on screen resolution
  updateParticlesValue() {
    const base = 1440000;
    const value = 50;

    //Calulates resolution and sets particle density using base percentage.
    var res = window.screen.height * window.screen.width;
    var percent = res / base;

    particlesjs.particles.number.value = (value * percent);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  static contextTypes = {
    parallaxController: PropTypes.object.isRequired,
  };

  resize() {
    const newHeightOffset = window.innerHeight;
    const { height, width } = this.state;

    //Prevent browser menu on mobile from causing background to resize by applying a offset boundry.
    if (newHeightOffset + 100 < height || newHeightOffset - 100 > height) {
      this.setState({ height: window.innerHeight, width: window.innerWidth });
    }

    if (width !== window.innerWidth) {
      this.setState({width: window.innerWidth })
    }

    this.context.parallaxController.update();
  }

  render() {
    const { height, width } = this.state;

    return (
      <Container id="Background" height={height} width={width}>
        <Parallax
          offsetYMax={10}
          offsetYMin={0}
        >
          <Particles params={particlesjs} />
        </Parallax>
      </Container>
    );
  }
}
