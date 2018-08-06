import React from 'react';

import styled from 'styled-components';
import Tilt from 'react-tilt';

const Title = styled.div`
    margin: auto;
    text-align: center;
    color: black;
`

export const Tile = (props) => {
    const styles = {
        title: {
            display: 'flex',
            height: '250px',
            width: '250px',
            backgroundColor: 'white',
        }
    }
    
    const options = {
        reverse: true,
        max: 20,
    }

    return(
        <Tilt options={options} style={styles.title}>
            <Title>
                {props.title}
            </Title>
        </Tilt>
    )
}