import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import HighlightText from '../../components/HighlightText';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        padding: 100px 20%;
    }
`

const Container = styled.div`
    margin: auto;
    background: #090909;
    border: 15px solid #66ccff;
    font-size: 75%;

    .slick-slider {
        /* height: ${(props) => props.height ? props.height : "500px"}; */
    }

    .slick-list {
        max-height: 500px;
        /* margin: 50px 0; */
    }

    p {
        font-family: CPMono_Light;
    }

    @media screen and (min-width: 800px) {
        p {
            font-family: CPMono;
        }

        font-size: 90%;
    }

    @media screen and (min-width: 1200px) {
        font-size: 100%;
    }
`

const Header = styled.div`
    margin-left: -10px;
    margin-bottom: 25px;

    @media screen and (min-width: 800px) {
        margin-bottom: 50px;
    }
`

const Close = styled.span`
    float: right;
    margin: 10px 15px;

    :hover {
        color: #66ccff
    }
`

const Description = styled.div`
    margin: 25px 25px; 

    @media screen and (min-width: 800px) {
        margin: 50px 50px; 
    }
`

const Image = styled.img`
    width: inherit;
`

const SkillsModal = (props) => {
    if (!props.show) {
        return null;
    }

    const { project, onClose } = props;

    const settings = {
        centerMode: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
    }

    const slides = project.slides.map((slide) =>
        <div key={slide}>
            <Image src={slide} />
        </div>
    );

    return (
        <Background>
            <Container>
                <Header>    
                    <HighlightText color="#66ccff" size={"2em"}>{project.title}</HighlightText>
                    <Close onClick={onClose}><FontAwesomeIcon icon={faTimes} size="2x" /></Close>
                </Header>
                <Slider {...settings}>
                    {slides}
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