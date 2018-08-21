import styled from 'styled-components';

const Block = styled.div`
    color: ${(props) => props.solid ? "#ffffff" : "#090909"};
    font-family: CPMono;
    height: ${(props) => props.size ? props.size + 'px' : 'fit-content'};
    width: 100%;
    padding: ${(props) => props.noPadding ? "100px 0" : "100px 10%"};
    background-color: ${(props) => props.solid ? '#090909' : ''};
    box-shadow: ${(props) => props.solid ? "0px 10px 20px 0px rgba(0, 0, 0, .5)" : ''};

    @media only screen and (min-width: 1800px) {
        padding: ${(props) => props.noPadding ? "100px 0" : "100px 15%"};
    }

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        text-align: center;
        justify-content: space-evenly;
    }    
`;

export default Block;