import styled from 'styled-components'

//https://callmenick.com/dev/multi-line-padded-text-css-box-decoration-break/
const HighlightText = styled.span`
    display: ${(props) => props.display ? props.display : ""};
    margin: ${(props) => props.margin ? props.margin : ""};
    font-size: ${(props) => props.responsive ? props.responsive : ""};
    text-transform: uppercase;
    padding: 0.2em 10px;
    color: ${(props) => props.textColor ? props.textColor : "#090909"};
    background: ${(props) => props.color ? props.color : "#66ccff"};
    z-index: ${(props) => props.zIndex ? props.zIndex : ""};
    line-height: ${(props) => props.multiLine ? "2" : ""};
    box-decoration-break: clone;

    @media screen and (min-width: 800px) {
        font-size: ${(props) => props.size ? props.size : "1.5em"};
    }
`

export default HighlightText