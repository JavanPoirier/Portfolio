import React, { Component } from 'react'

import styled from 'styled-components'
import Animate from '../../components/Animate'
import CountUp from 'react-countup'

//https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705

const Container = styled.div`
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

const Percent = styled.text`
`

export default class Pie extends Component {
  constructor(props) {
    super(props)

    this.pie = React.createRef();
    this.countUpRef = React.createRef();
    this.animate = this.animate.bind(this);
  }

  animate() {
    const pie = this.pie.current;

    console.log('Here!');
    console.log(pie.style.animation = "progress 2s ease-in 2s forwards");
  }

  render() {
    return(
      <Container>
        <Animate callback={this.animate}>
          <PieChart viewBox="0 0 32 32">
            <g transform={"translate(0, 0) scale(" + this.props.scale + ")"}>
              <path className="circle" ref={this.pie} 
              strokeDasharray={this.props.percent + ", 100"}            
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />   
              {/* <Percent x="18" y="20.35">          */}
                <CountUp start={0} end={100} duration={5} suffix="%" x="18" y="20.35"/>              
              {/* </Percent>            */}
            </g>
          </PieChart>
        </Animate>
        <Percent x="18" y="20.35"> 
        <CountUp start={0} end={this.props.percent} duration={5} />
        </Percent>  
      </Container>
    )
  }    
}