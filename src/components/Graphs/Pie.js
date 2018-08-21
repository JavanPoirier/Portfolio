import React, { Component } from 'react'

import styled from 'styled-components'
import Animate from '../../components/Animate'
import CountUp from 'react-countup'

//https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705

const Container = styled.div`
position: relative;
`

const PieChart = styled.svg`
  .circle {
    stroke: #66ccff;
    fill: none;
    stroke-width: 3;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
`

const Percent = styled.div`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  height: fit-content;
  margin: auto;
  font-size: 2em;
`

export default class Pie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animate: false,
    }

    this.pie = React.createRef();
    this.animate = this.animate.bind(this);
  }

  animate() {
    const pie = this.pie.current;

    console.log('animate')
    this.setState({ animate: true });
    console.log(pie.style.animation = "progress 2s ease-in 2s forwards");
  }

  render() {
    const { scale, percent } = this.props;

    return(
      <Animate callback={this.animate}>
        {this.state.animate === true ?
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
            <CountUp start={0} end={percent} duration={5} suffix="%" />
          </Percent>
        </Container>
        : null}
      </Animate>
    )
  }    
}