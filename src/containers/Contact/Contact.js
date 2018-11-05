import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

import theme from '../../theme'

import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
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
    background-color: #fff;
    border: none;
    text-transform: uppercase;
    font-size: 1em;

    :hover {
        background-color: #66ccff;
    }
`

const Items = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;

    .link:hover {
        color: #66ccff;
        text-decoration: none;
        transition-duration: color 0.2s;
    }

    @media screen and (min-width: 800px) {
        flex-direction: column;
    }
`

const Item = styled.a`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
`

const Text = styled.div`
    display: none;
    margin: 0 0 0 15px;
    text-decoration: none;

    @media screen and (min-width: 1200px) {
        display: inline;
    } 
`

const Title = styled.h1`

`

const Notification = styled.text`
    float: right;
    color: green;

    .notify-appear {
        opacity: 0.01;
    }

    .notify-appear.notify-appear-active {
        opacity: 1;
        transition: opacity .5s ease-in;
    }
`

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            sent: "",
            spinner: false,
        }

        this.logChange = this.logChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    logChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitForm(e) {
        e.preventDefault();

        this.setState({ spinner: true });
        emailjs.send('mailgun', 'javanpoirier', this.state, process.env.REACT_APP_EMAILJS_USERID)
            .then((response) => {
                var state = {
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    sent: true,
                    spinner: false,
                }

                this.setState(state);
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    render() {
        var { name, email, subject, message, sent } = this.state;

        return (
            <Block id="Contact" minHeight={'90vh'} style={{ display: "flex", alignItems: "center" }}>
                <Title>Contact Me</Title>
                <Container>
                    <SubContainer className="contactForm">
                        <Form onSubmit={this.submitForm}>
                            <InputGroup>
                                <FormGroup className={"name"}>
                                    <Label>Name:</Label>
                                    <Input type="text" name="name" value={name} onChange={this.logChange} required />
                                </FormGroup>
                                <FormGroup className={"email"}>
                                    <Label>Email:</Label>
                                    <Input type="email" name="email" value={email} onChange={this.logChange} required />
                                </FormGroup>
                            </InputGroup>
                            {this.props.scrollTrigger}
                            <FormGroup className={"subject"}>
                                <Label>Subject:</Label>
                                <Input type="text" name="subject" maxLength="20" value={subject} onChange={this.logChange} required />
                            </FormGroup>
                            <FormGroup>
                                <Label>Message:</Label>
                                <Message name="message" rows="6" value={message} onChange={this.logChange} required />
                            </FormGroup>
                            <FormGroup>
                                <Submit>Submit_</Submit>
                                <CSSTransition
                                    in={sent}
                                    classNames="notify"
                                    timeout={500}
                                    unmountOnExit
                                    onExited={() => {
                                        this.setState({ sent: false });
                                        }
                                    }
                                >
                                            <Notification key="notification">Sent Successfully, Thanks!</Notification>
                                </CSSTransition>
                            </FormGroup>
                        </Form>

                    </SubContainer>
                    <SubContainer className="contactLinks">
                        <Items className={"contactItems"}>
                            <Item title="LinkedIn" className="link" href="https://www.linkedin.com/in/Javan-Poirier/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                <Text>Javan-Poirier</Text>
                            </Item>
                            <Item title="Github" className="link" href="https://github.com/JavanPoirier" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                                <Text>JavanPoirier</Text>
                            </Item>
                            <Item title="StackOverflow" className="link" href="https://stackoverflow.com/users/9005679/javan-poirier?tab=profile" target="_blank">
                                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
                                <Text>Javan_Poirier</Text>
                            </Item>
                            <Item title="Email" className="link" href="mailto:Me@JavanPoirier.com">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                <Text>Me@JavanPoirier.com</Text>
                            </Item>
                            <Item title="Resume" className="link" href='/JavanPoirierResume.pdf' target='_blank'>
                                <FontAwesomeIcon icon={faFileAlt} size="2x" />
                                <Text>Resume</Text>
                            </Item>
                        </Items>
                    </SubContainer>
                </Container>
            </Block >
        );
    }
}