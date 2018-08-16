import styled from 'styled-components'

const HighlightText = styled.div`
    display: ${(props) => props.display ? props.display : ""};
    width: fit-content;
    margin: ${(props) => props.margin ? props.margin : ""};
    font-size: ${(props) => props.size ? props.size : "1.5em"};
    text-transform: uppercase;
    padding: 0 5px;
    color: ${(props) => props.textColor ? props.textColor : "#090909"};
    background: ${(props) => props.color ? props.color : "#66ccff"};
    z-index: ${(props) => props.zIndex ? props.zIndex : ""};
`

export default HighlightText