import styled from 'styled-components'

const HighlightText = styled.div`
    width: fit-content;
    font-size: 1.5em;
    text-transform: uppercase;
    padding: 0 5px;
    color: #090909;
    background: ${(props) => props.color ? props.color : "#66ccff"};
`

export default HighlightText