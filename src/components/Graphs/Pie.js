import React from 'react';

import styled from 'styled-components';

//https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705
const PieChart = styled.svg`
  .circle {
    stroke: #66ccff;
    fill: none;
    stroke-width: 2.5;
    animation: progress 5s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
`

const Text = styled.text`
  font-size: 0.5em;
  text-anchor: middle;
`

const Pie = (props) => {
    return(
        <PieChart viewbox="0 0 36 36">
        <g transform="translate(110,110)">
            <path className="circle"
            strokeDasharray={props.percent + ", 100"}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <Text x="18" y="20.35">{props.percent}%</Text>
        </g>
        </PieChart>
    )
}

export default Pie