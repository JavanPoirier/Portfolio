import React, { Component } from 'react'

import styled from 'styled-components'
import Block from '../../components/Block'
import { Tile } from '../../components/Projects/Tile'

import ProjectsModal from './ProjectsModal'
import chatbot from '../../components/Projects/Chatbot/Chatbot'
import customTechServices from '../../components/Projects/CustomTechServices/CustomTechServices'
import decipherEscapeRooms from '../../components/Projects/DecipherEscapeRooms/DecipherEscapeRooms'
import musicManager from '../../components/Projects/MusicManager/MusicManager'
import gurds from '../../components/Projects/GurdsManagementSystem/Gurds'

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
                    <Tile title={chatbot.title} img={""} img={chatbot.slide} onClick={() => this.toggle(chatbot)} />
                    <Tile title={customTechServices.title} img={customTechServices.slide} onClick={() => this.toggle(customTechServices)} />
                    <Tile title={decipherEscapeRooms.title} img={decipherEscapeRooms.slide} onClick={() => this.toggle(decipherEscapeRooms)} />
                    <Tile title={musicManager.title} img={musicManager.slide} onClick={() => this.toggle(musicManager)} xpos={"center"} />
                    <Tile title={gurds.title} img={gurds.slide} onClick={() => this.toggle(gurds)} />
                </Tiles>
                <ProjectsModal show={this.state.modal}
                    onClose={this.toggle} project={this.state.project}
                />
            </Block>
        );
    }
}