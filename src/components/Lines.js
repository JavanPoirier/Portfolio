import styled from 'styled-components'

const Lines = styled.div`
    position: absolute;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    background: repeating-linear-gradient(-45deg,
      transparent,
      transparent 4px,
      #404040 6px,
      #404040 6px);
      z-index: -1;
`

export default Lines;