import React, { Component } from 'react';

import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 75px;
    position: fixed;
    background-color: #090909;
    z-index: 100;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, .5);
`

const Items = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    font-size: 1.25em;
    font-family: CPMono;
    text-align: center;
    text-transform: uppercase;

    a {
        height: 100%;
        padding: 0 15px;
        color: #fff;
        position: relative;
        text-decoration: none;
        display: flex;
        align-items: center;

        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
    }

    li {
        display: flex;
        list-style: outside none none;
    }

    a:after {
        height: 5px;
        position: absolute;
        content: '';
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        background-color: #66ccff;
        width: 0;
    }

    a:before {
        top: 0;
        right: 0;
    }

    a:after {
        bottom: 0;
        left: 0;
    }

    a:hover, .active, .active::after{
        color: #66ccff;
        width: 100%;
    }

    a:hover:before, .active a:before, a:hover:after, .active a:after {
        color: #66ccff;
        width: 100%;
    }
`

const Item = styled.li`
    height: 100%;
`

const Text = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`

export default class Navigation extends Component {
    constructor() {
        super()

        this.state =  {
            activeHref: "#Home",
            lastHref: "#Home",
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.href !== state.activeHref) {
            return {
                activeHref: props.href
            };
        }
        return null;
    }

    componentDidUpdate(props, state) {
        if (props.href !== this.props.href) {
            this.setActive(props.href);
        }
    }

    setActive(href) {
        this.setState({activeHref: href});
        this.setState({lastHref: href});
    }

    toggleActive(href) {
        href !== this.state.activeHref ? (this.setState({ lastHref: this.state.activeHref }, () => {
            this.setState({ activeHref: href }) 
        })) : this.setState({ activeHref: this.state.lastHref }) 
    }

    render() {
        const { activeHref } = this.state;

        return (
            <Container>
                <Items>
                    <Item>
                        <AnchorLink offset="150" href="#Home" className={activeHref === "#Home" ? "active" : ""} onClick={() => this.setActive("#Home")} onMouseEnter={() => this.toggleActive("#Home")} onMouseLeave={() => this.toggleActive("#Home")}>
                            <FontAwesomeIcon icon={faHome} /><Text>&nbsp;Home</Text>
                        </AnchorLink>
                    </Item>
                    <Item>
                        <AnchorLink offset="0" href="#About" className={activeHref === "#About" ? "active" : ""} onClick={() => this.setActive("#About")} onMouseEnter={() => this.toggleActive("#About")} onMouseLeave={() => this.toggleActive("#About")}>
                            <FontAwesomeIcon icon={faUser} /><Text>&nbsp;About</Text>
                        </AnchorLink>
                    </Item>
                    <Item>
                        <AnchorLink offset="150" href="#Projects" className={activeHref === "#Projects" ? "active" : ""} onClick={() => this.setActive("#Projects")} onMouseEnter={() => this.toggleActive("#Projects")} onMouseLeave={() => this.toggleActive("#Projects")}>
                            <FontAwesomeIcon icon={faCode} /><Text>&nbsp;Projects</Text>
                        </AnchorLink>
                    </Item>
                    <Item>
                        <AnchorLink href="#Contact" className={activeHref === "#Contact" ? "active" : ""} onClick={() => this.setActive("#Contact")} onMouseEnter={() => this.toggleActive("#Contact")} onMouseLeave={() => this.toggleActive("#Contact")}>
                            <FontAwesomeIcon icon={faEnvelope} /><Text>&nbsp;Contact</Text>
                        </AnchorLink>
                    </Item>
                </Items>
            </Container>
        )
    }
}