import React, { Component } from 'react'

import theme from '../../theme'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Block from '../../components/Block';

const Container = styled.div`
    display: flex; 
    justify-content: space-between;

    color: #fff;

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: space-evenly;

        .contactForm {
            text-align: left;
        }
    }
`

const SubContainer = styled.div`
    display: flex;
    width: 100%;
    min-width: 200px;
    padding: 15px;
    font-size: 85%;
    background-color: ${theme.backgroundColor};
    box-shadow: ${theme.boxShadow};

    :first-child {
        margin-bottom: 50px;
    }

    @media only screen and (min-width: 800px) {
        width: ${(props) => props.width};
        min-width: ${(props) => props.minWidth ? props.minWidth : "0px"};
        font-size: 100%;

        :first-child {
            margin-bottom: 0px;
        }
    }
`

const Form = styled.form`
    flex: 2;
`

const FormGroup = styled.div`
    width: 100%;
    padding: 10px;

    @media (max-width: 800px) {
        width: 100%;
    }
`

const Label = styled.div`
    display: block;
    padding: 2px 0;
`

const InputGroup = styled.div`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

const Input = styled.input`
    width: 100%;
`

const Message = styled.textarea`
    display: block;
    width: 100%;
    resize: none;
    overflow-y: scroll;

    @media only screen and (max-width: 800px) {
        max-height: 150px
    }
`

const Submit = styled.button`
`

const Items = styled.div`
    flex: 1;
    display: grid;
    width: 100%;
    margin: auto;
    grid-gap: 25px;
    align-items: center;
    justify-content: center;

    div:hover {
        color: #66ccff;
            text-decoration: none;
            transition-duration: color 0.2s;
    }

    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: space-evenly;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a:hover {
        color: #66ccff;
        text-decoration: none;
        transition-duration: color 0.2s;
    }
`

const Link = styled.a`
    display: contents;
    color: #fff;
    text-decoration: none;
`

const Text = styled.div`
    margin: 0 0 0 15px;
   
    @media screen and (max-width: 800px) {
        display: none;
    } 
`

export default class Contact extends Component {
    render() {
        return (
            <Block id="Contact" title="Contact Me">
                <Container>
                    <SubContainer width="60%" minWidth="40%">
                        <Form className={"contactForm"}>
                            <InputGroup>
                                <FormGroup className={"name"}>
                                    <Label>Name:</Label>
                                    <Input type="text" name="contactName" required />
                                </FormGroup>
                                <FormGroup className={"email"}>
                                    <Label>Email:</Label>
                                    <Input type="email" name="contactEmail" required />
                                </FormGroup>
                            </InputGroup>
                            <FormGroup className={"subject"}>
                                <Label>Subject:</Label>
                                <Input type="text" name="contactSubject" maxLength="20" required />
                            </FormGroup>
                            <FormGroup>
                                <Label> Message:</Label>
                                <Message name="contactMessage" rows="6" required />
                            </FormGroup>
                            <FormGroup>
                                <Submit>Submit</Submit>
                            </FormGroup>
                        </Form>
                    </SubContainer>
                    <SubContainer width="30%" minWidth="fit-content">
                        <Items className={"contactItems"}>
                            <Item>
                                <Link href="https://www.linkedin.com/in/Javan-Poirier/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    <Text>Javan-Poirier</Text>
                                </Link>
                            </Item>
                            <Item>
                                <Link href="https://github.com/JavanPoirier" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                    <Text>JavanPoirier</Text>
                                </Link>
                            </Item>
                            <Item>
                                <Link href="https://stackoverflow.com/users/9005679/javan-poirier?tab=profile" target="_blank">
                                    <FontAwesomeIcon icon={faStackOverflow} size="2x" />
                                    <Text>Javan_Poirier</Text>
                                </Link>
                            </Item>
                            <Item>
                                <Link href="mailto:Me@JavanPoirier.com">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                    <Text>Me@JavanPoirier</Text>
                                </Link>
                            </Item>
                        </Items>
                    </SubContainer>
                </Container>
            </Block >
        );
    }
}