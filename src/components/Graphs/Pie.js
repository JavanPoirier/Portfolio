import React from 'react';

import styled from 'styled-components';

//https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705
const PieChart = styled.svg`
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;

.circle {
  stroke: #66ccff;
  fill: none;
  stroke-width: 2.5;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
`

const Pie = (props) => {
    return(
        <PieChart viewbox="0 0 36 36" class="circular-chart">
            <path class="circle"
            stroke-dasharray="60, 100"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        </PieChart>
    )
}

export default Pie