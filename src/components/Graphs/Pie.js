import React from 'react';

import styled from 'styled-components';

//https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705

const Container = styled.div`
  text-align: center;
`

const PieChart = styled.svg`
  height: 100%;
  width: 100%;

  .circle {
    stroke: #66ccff;
    fill: none;
    stroke-width: 2.5;
    animation: progress 2s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
`

const Percent = styled.text`
  font-size: 0.5em;
  text-anchor: middle;
`

const Text = styled.h2`
`

const Pie = (props) => {
    return(
      <Container>
        <PieChart>
        <g transform={"scale(" + props.scale + ")"}>
            <path className="circle"
            strokeDasharray={props.percent + ", 100"}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <Percent x="18" y="20.35">{props.percent}%</Percent>
        </g>
        </PieChart>
        <Text>JavaScript</Text>
      </Container>
    )
}

export default Pie