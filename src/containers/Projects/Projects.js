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
import Tag from '../../components/Tag';

const Tiles = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;

    .tilt:hover {
        z-index: 15;
    }
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
            document.getElementById('body').style.overflowY = "hidden";
            this.setState({ project: project });
        } else {
            document.getElementById('body').style.overflowY = "scroll";
        }

        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <Block id='Projects' titleCenter solid noPadding>
                <TagContainer>
                    <Tag text='Projects' size={50}/> 
                </TagContainer>
                <Tiles>
                    <Tile title={chatbot.title} img={chatbot.slide} onClick={() => this.toggle(chatbot)} />
                    <Tile title={customTechServices.title} img={customTechServices.slide} onClick={() => this.toggle(customTechServices)} />
                    <Tile title={gurds.title} img={gurds.slide} onClick={() => this.toggle(gurds)} />
                    <Tile title={musicManager.title} img={musicManager.slide} onClick={() => this.toggle(musicManager)} xpos={"center"} />
                </Tiles>
                <ProjectsModal show={this.state.modal}
                    onClose={() => this.toggle()} project={this.state.project}
                />
            </Block>
        );
    }
}

const TagContainer = styled.div`
    margin-top: -150px;
    margin-bottom: 50px;
`