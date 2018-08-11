import React, { Component } from 'react'

import theme from '../../theme'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Block from '../../components/Block';

const Container = styled.div`
    color: #fff;
    background-color: ${theme.backgroundColor};
    box-shadow: ${theme.boxShadow};
`

const Content = styled.div`
    display: flex;
    padding: 15px;
    justify-content: space-between;
`


const Form = styled.form`
    flex: 2;
`

const Label = styled.div`
    display: block;
    padding: 2px 0;
`

const FormGroup = styled.div`
    padding: 10px;
`

const Input = styled.input`
    /* display: block;
    width: fit-content; */
    width: auto;
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
    align-content: center;

    :hover {
        color: #66ccff;
        transition-duration: color 0.2s;

        a {
            color: #66ccff;
            text-decoration: none;
            transition-duration: color 0.2s;
        }
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
                    <Content>
                            <Form>

                                <FormGroup left>
                                    <Label>Email:</Label>
                                    <Input type="email" name="contactEmail" required />
                                </FormGroup>
                                <FormGroup right>
                                    <Label>Subject:</Label>
                                    <Input type="text" name="contactSubject" maxLength="20" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label> Message:</Label>
                                    <Message name="contactMessage" rows="5" required />
                                </FormGroup>
                                <FormGroup>
                                    <Submit>Submit</Submit>
                                </FormGroup>
                            </Form>
                            <Items>
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
                    </Content>
                </Container >
            </Block >
        );
    }
}