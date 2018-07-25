import styled from 'styled-components';

const Block = styled.div`
    height: ${(props) => props.size ? props.size + "px" : '600px'};
    padding: 0px 15px 0px 15px;
    background-color: #090909;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, .5)";
`;

export default Block;