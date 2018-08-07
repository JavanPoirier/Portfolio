import React, { Component } from 'react';

import styled from 'styled-components';
import Block from '../../components/Block';
import { Tile } from '../../components/Projects/Tile';

const Tiles = styled.div`
    display: flex;
`

export default class Projects extends Component {
    render() {
        const styles = {
            container: {
                height: "500px",
                backgroundColor: "#090909",
                boxShadow: "25px 25px 25px 25px #090909"
            },
            header: {
                textAlign: "center",
                fontFamily: "CPMono",
                color: "#ffffff"
            }
        }
        
        return(
            <Block id='Projects' solid>
                <h1 style={styles.header}>Projects</h1>
                 <Tiles>
                     <Tile title={'A Project Title'}/>
                     <Tile title={'A Project Title'}/>
                 </Tiles>
            </Block>
        );
    }
}