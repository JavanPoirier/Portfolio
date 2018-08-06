import React, { Component } from 'react';

import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 75px;
    position: fixed;
    background-color: #090909;
    z-index: 1;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, .5);
`

const Items = styled.div`
    display: inherit;
    margin: auto;
    font-size: 1.25em;
    font-family: CPMono;

    a {
        display: inherit;
        color: #fff;
        margin: 0 15px; 
        text-transform: uppercase;
        text-decoration: none; 
    }

    a:hover {
        color: #66ccff;
        transition: color 0.2s;
    }

    @media (max-width: 768px) {
        .nav-text {
            display: none;
        }
    }
`

export default class Navigation extends Component {
    render() {
        return (
            <Container>
                <Items>
                    <AnchorLink offset="150" href="#Home">
                        <FontAwesomeIcon icon={faHome} /><div className="nav-text">&nbsp;Home</div>
                    </AnchorLink>
                    <AnchorLink offset="150" href="#About">
                        <FontAwesomeIcon icon={faUser} /><div className="nav-text">&nbsp;About</div>
                    </AnchorLink>
                    <AnchorLink offset="150" href="#Projects">
                        <FontAwesomeIcon icon={faCode} /><div className="nav-text">&nbsp;Projects</div>
                    </AnchorLink>
                    <AnchorLink offset="150" href="#Contact">
                        <FontAwesomeIcon icon={faEnvelope} /><div className="nav-text">&nbsp;Contact</div>
                    </AnchorLink>
                </Items>
            </Container>
        )
    }
}