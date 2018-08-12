import React, { Component } from 'react'

import theme from '../../theme'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Block from '../../components/Block';

const Container = styled.div`
    display: flex;
    padding: 15px;
    justify-content: space-between;

    color: #fff;
    background-color: ${theme.backgroundColor};
    box-shadow: ${theme.boxShadow};

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: space-evenly;

        .contactForm {
            text-align: left;
        }

        .contactItems {
            padding: 20px;
        }
    }
`

const Form = styled.form`
    flex: 2;
`

const FormGroup = styled.div`
    width: 90%;
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
    width: 90%;

    @media (max-width: 800px) {
        width: 100%;
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
`

const Item = styled.div`
    display: flex;

    :hover {
        /* color: #66ccff;
        transition-duration: color 0.2s; */

        a {
            color: #66ccff;
            text-decoration: none;
            transition-duration: color 0.2s;
        }
    }

    @media (max-width: 800px) {
        justify-content: center;
    }
`

const Link = styled.a`
    margin: auto 15px;
    color: #fff;
    text-decoration: none;  
`

export default class Contact extends Component {
    render() {
        return (
            <Block id="Contact" >
                <Container>
                    <Form className={"contactForm"}>
                        <InputGroup>
                            <FormGroup className={"email"}>
                                <Label>Email:</Label>
                                <Input type="email" name="contactEmail" required />
                            </FormGroup>
                            <FormGroup className={"subject"}>
                                <Label>Subject:</Label>
                                <Input type="text" name="contactSubject" maxLength="20" required />
                            </FormGroup>
                        </InputGroup>
                        <FormGroup>
                            <Label> Message:</Label>
                            <Message name="contactMessage" rows="10" required />
                        </FormGroup>
                        <FormGroup>
                            <Submit>Submit</Submit>
                        </FormGroup>
                    </Form>
                    <Items className={"contactItems"}>
                        <Item>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            <Link href="https://www.linkedin.com/in/javan-poirier/">javan-poirier</Link>
                        </Item>
                        <Item>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            <Link href="">JavanPoirier</Link>
                        </Item>
                        <Item>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            <Link href="mailto:Me@JavanPoirier.com">Me@JavanPoirier.com</Link>
                        </Item>
                    </Items>
                    {/* </Column> */}
                </Container >
            </Block >
        );
    }
}