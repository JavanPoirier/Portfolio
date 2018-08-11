import React, { Component } from 'react';

import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: flex;
    margin: auto;
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
        align-items: center;
    }

    a:hover {
        color: #66ccff;
        transition: color 0.2s;
    }

    a:focus {
        color: #66ccff;
        transition: color 0.2s;
    } 
`

const Item = styled.div`
    height: 100%;
`

const Text = styled.div`
    display: inline;

    @media (max-width: 800px) {
        display: none;
    }
`

const Span = styled.span`
    position: absolute;
    bottom: -1px;
    height: 5px;
    background: #66ccff;
    left: 0;
    right: 0;
`

export default class Navigation extends Component {
    render() {
        return (
            <Container>
                <Items>
                    <Item>
                        <AnchorLink offset="150" href="#Home">
                            <FontAwesomeIcon icon={faHome} /><Text>&nbsp;Home</Text>
                            <Span></Span>
                        </AnchorLink>
                    </Item>
                    <Item>
                        <AnchorLink offset="150" href="#About">
                            <FontAwesomeIcon icon={faUser} /><Text>&nbsp;About</Text>
                        </AnchorLink>
                    </Item>
                    <Item>
                        <AnchorLink offset="150" href="#Projects">
                            <FontAwesomeIcon icon={faCode} /><Text>&nbsp;Projects</Text>
                        </AnchorLink>
                    </Item>
                    <Item>
                        <AnchorLink href="#Contact">
                            <FontAwesomeIcon icon={faEnvelope} /><Text>&nbsp;Contact</Text>
                        </AnchorLink>
                    </Item>
                </Items>
            </Container>
        )
    }
}