import styled from 'styled-components';

const Block = styled.div`
    color: ${(props) => props.solid ? "#ffffff" : "#090909"};
    font-family: CPMono;
    height: ${(props) => props.size ? props.size + 'px' : '600px'};
    padding: ${(props) => props.noPadding ? "0" : "0 15%"};
    background-color: ${(props) => props.solid ? '#090909' : ''};
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, .5);
`;

export default Block;