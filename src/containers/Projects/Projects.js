import React, { Component } from 'react'

import styled from 'styled-components'
import Block from '../../components/Block'
import { Tile } from '../../components/Projects/Tile'

import customTechServices from '../../components/Projects/CustomTechServices/CustomTechServices.png'
import decipherEscapeRooms from '../../components/Projects/DecipherEscapeRooms/DecipherEscapeRooms.png'
import musicManager from '../../components/Projects/MusicManager/MusicManager.png'

const Tiles = styled.div`
    display: flex;
    justify-content: center;
`

export default class Projects extends Component {
    constructor(){
        super()

        this.test = this.test.bind(this);
    }

    test() {
        alert('clicked');
    }

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
            <Block id='Projects' solid noPadding>
                <h1 style={styles.header}>Projects</h1>
                 <Tiles>
                     <Tile title={'Custom Tech Services'} img={customTechServices} callback={this.test}/>
                     <Tile title={'Decipher Escape Rooms'} img={decipherEscapeRooms} callback={this.test}/>
                     <Tile title={'Music Manager'} img={musicManager} callback={this.test} xpos={"center"}/>
                 </Tiles>
            </Block>
        );
    }
}