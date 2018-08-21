import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Background = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;

    @media only screen and (min-width: 800px) {
        padding: 20%;
    }
`

const Container = styled.div`
    padding: 15px;
    margin: auto;
    background: #090909;
`

const Close = styled.span`
    float: right;
`

const Title = styled.h1`

`

const SkillsModal = (props) => {
    if (!props.show) {
        return null;
    }

    let project = props.project;

    return (
        <Background>
            <Container>
                <Close onClick={props.onClose}><FontAwesomeIcon icon={faTimes} size="2x" /></Close>
                <Title>{project.title}</Title>
            </Container>
        </Background>
    )
}

SkillsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
};

export default SkillsModal;