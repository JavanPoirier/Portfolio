import React, { Component } from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import Particles from 'react-particles-js';

import particlesjs from './particlesjs';

const Container = styled.div`
  position: fixed;
  z-index: -1000;

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

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  static contextTypes = {
    parallaxController: PropTypes.object.isRequired,
  };

  resize() {
    this.setState({ height: window.innerHeight, width: window.innerWidth }, () => {
      console.log(this.context);
      this.context.parallaxController.update();
    })
  }

  render() {
    const { height, width } = this.state;

    return (
      <Container id="Background" height={height} width={width}>
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
