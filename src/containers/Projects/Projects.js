import React, { Component } from 'react'

import styled from 'styled-components'
import Block from '../../components/Block'
import { Tile } from '../../components/Projects/Tile'

import ProjectsModal from './ProjectsModal'
import customTechServices from '../../components/Projects/CustomTechServices/CustomTechServices.png'
import decipherEscapeRooms from '../../components/Projects/DecipherEscapeRooms/DecipherEscapeRooms.png'
import musicManager from '../../components/Projects/MusicManager/MusicManager.png'
import gurds from '../../components/Projects/GurdsManagementSystem/Customer.png'

import projects from '../../components/Projects/Projects.json'

const Tiles = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

export default class Projects extends Component {
    constructor() {
        super()

        this.state = {
            modal: false,
            project: {},
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(project) {
        if (project) {
            this.setState({ project: project });
        }

        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <Block id='Projects' title="Projects" titleCenter solid noPadding>
                <Tiles>
                    <Tile title={'ChatBot'} img={""} onClick={() => this.toggle(projects.chatbot)} />
                    <Tile title={'Custom Tech Services'} img={customTechServices} onClick={() => this.toggle(projects.customTechServices)} />
                    <Tile title={'Decipher Escape Rooms'} img={decipherEscapeRooms} onClick={() => this.toggle(projects.decipherEscapeRooms)} />
                    <Tile title={'Music Manager'} img={musicManager} onClick={() => this.toggle(projects.musicManager)} xpos={"center"} />
                    <Tile title={'Gurds Management System'} img={gurds} onClick={() => this.toggle(projects.gurds)} />
                </Tiles>
                <ProjectsModal show={this.state.modal}
                    onClose={this.toggle} project={this.state.project}
                />
            </Block>
        );
    }
}