import React, { Component } from 'react'

import theme from '../../theme'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'

import Block from '../../components/Block';

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    color: #fff;

    .contactForm {
        margin-bottom: 50px;
        border-bottom: 10px solid #66ccff;  
    }

    @media screen and (min-width: 800px) {
        flex-direction: row;

        .contactForm {
            margin-bottom: 0;
            width: 80%;
        }
    }

    @media screen and (min-width: 1200px) {
        .contactForm {
            width: 60%;
        }

        .contactLinks {
            width: 30%;
        }
    }
`

const SubContainer = styled.div`
    display: flex;
    padding: 15px;
    background-color: ${theme.backgroundColor};
    box-shadow: ${theme.boxShadow};

    @media screen and (min-width: 800px) {
        border-bottom: 10px solid #66ccff;
    }
`

const Form = styled.form`
    flex: 2;
`

const FormGroup = styled.div`
    width: 100%;
    padding: 10px;
`

const Label = styled.div`
    display: block;
    padding: 2px 0;
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 800px) {
        flex-direction: row;
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
    box-shadow: none;
`

const Submit = styled.button`
`

const Items = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;

    div:hover {
        color: #66ccff;
        text-decoration: none;
        transition-duration: color 0.2s;
    }

    @media screen and (min-width: 800px) {
        flex-direction: column;
    }
`

const Item = styled.div`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;

    a:hover {
        color: #66ccff;
        text-decoration: none;
        transition-duration: color 0.2s;
    }
`

const Text = styled.div`
    display: none;
    margin: 0 0 0 15px;
   
    @media screen and (min-width: 1200px) {
        display: inline;
    } 
`

const Title = styled.h1`

`

const Contact = (props) =>{
        return (
            <Block id="Contact">
                <Title>Contact Me</Title>
                <Container>           
                    <SubContainer className="contactForm">
                        <Form>
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
                            {props.scrollTrigger}
                            <FormGroup>
                                <Label> Message:</Label>
                                <Message name="contactMessage" rows="6" required />
                            </FormGroup>
                            <FormGroup>
                                <Submit>Submit</Submit>
                            </FormGroup>
                        </Form>
                    </SubContainer>
                    <SubContainer className="contactLinks">
                        <Items className={"contactItems"}>
                            <Item title="LinkedIn" href="https://www.linkedin.com/in/Javan-Poirier/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                <Text>Javan-Poirier</Text>
                            </Item>
                            <Item title="Github" href="https://github.com/JavanPoirier" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                                <Text>JavanPoirier</Text>                       
                            </Item>
                            <Item title="StackOverflow" href="https://stackoverflow.com/users/9005679/javan-poirier?tab=profile" target="_blank">
                                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
                                <Text>Javan_Poirier</Text>
                            </Item>
                            <Item title="Email" href="mailto:Me@JavanPoirier.com">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                <Text>Me@JavanPoirier.com</Text>
                            </Item>
                            <Item title="Resume">
                                <FontAwesomeIcon icon={faFileAlt} size="2x" />
                                <Text>Resume</Text>
                            </Item>
                        </Items>
                    </SubContainer>
                    
                </Container>
            </Block >
        );
    }

export default Contact