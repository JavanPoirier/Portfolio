import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'

const Background = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    overflow: scroll;

    @media only screen and (min-width: 800px) {
        padding: 20%;
        padding-top: 100px;
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
    font-size: 2em;
`

const Hr = styled.hr`
    background-color: #66ccff;
    height: 5px;
`

const Description = styled.div`
`

const Image = styled.img`
    width: inherit;
`

const SkillsModal = (props) => {
    if (!props.show) {
        return null;
    }

    const { project, slides, onClose } = props;

    const settings = {
        adaptiveHeight: true,

        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
    }

    return (
        <Background>
            <Container>
                <Close onClick={onClose}><FontAwesomeIcon icon={faTimes} size="2x" /></Close>
                <Title>{project.title}</Title>
                <Hr />
                <Slider {...settings}>
                    {slides.map((slide) => {
                        return (
                        <div>
                            <Image src={slide}/>
                        </div>
                        )
                    })}
                </Slider>
                <Description>
                    {project.description}
                </Description>
            </Container>
        </Background>
    )
}

SkillsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
};

export default SkillsModal;