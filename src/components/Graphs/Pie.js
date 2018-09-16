import React, { Component } from 'react'

import styled from 'styled-components'
import CountUp from 'react-countup'

import ScrollTrigger from 'react-scroll-trigger'

//https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PieChart = styled.svg`
  width: 100%;
  height: 100%;

  .circle {
    stroke: #66ccff;
    fill: none;
    stroke-width: 3;
    animation: progress 3s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
`

const Percent = styled.div`
  position: absolute;
  font-size: 2em;
`

export default class Pie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animate: false,
    }

    this.onEnterViewport = this.onEnterViewport.bind(this);
    this.animate = this.animate.bind(this);
  }

  onEnterViewport() {
    this.animate();
  }

  animate() {
    this.setState({ animate: true });
  }

  render() {
    const { scale, percent } = this.props;

    var pie = null;
    if (this.state.animate === true) {
      pie = (
        <Container>
          <PieChart viewBox="0 0 32 32">
            <g transform={"translate(0, 0) scale(" + scale + ")"}>
              <path className="circle" ref={this.pie}
              strokeDasharray={this.props.percent + ", 100"}            
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />   
            </g>
          </PieChart>
          <Percent> 
            <CountUp start={0} end={percent} duration={4} suffix="%" />
          </Percent>
        </Container>
      )
    } else {
      pie = (
        <Container style={{height: "200px"}}>
          <Percent>
            %0
          </Percent>
        </Container>
      )
    }

    return(
      <ScrollTrigger onEnter={this.onEnterViewport}>
        {pie}
      </ScrollTrigger>
    )
  }    
}