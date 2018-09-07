import React from 'react'
import styled from 'styled-components';
import HighlightText from '../../../components/HighlightText'

import img1 from './Course.png';
import img2 from './Event.png';

const Wrapper = styled.div`
    font-size: 90%;
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;

    li {
        margin: 10px;
    }
`

const Link = styled.a`
    color: #66ccff;
`

const chatbot = {
    title: "Chatbot",
    slide: img1,
    slides: [img1, img2],
    description: (
        <Wrapper>
            <p>
            This Chatbot web appication was developed with the MERN (Mongo Express React Node) stack. The creation of courses by instructors
            allows for course contacts such as students to be added. Events are then set throughout the duration of the course, which 
            are triggered by a specified date and time. These events are sent by SMS using the Twilio API. A collection of events 
            were designed with the Twilio studio platform to allow for dynamic customization of the events.
            </p>
            <br/>
            <HighlightText color="white">Events</HighlightText>
            <br />
            <List>
                <li>- Info: Allows for up to 3 custom messages to be sent to contacts.</li>
                <li>- Sentiment: Request a contacts feedback and respond accordingly to negative, neutral or positive responses.</li>
                <li>- Quiz: Create a quiz with multiple questions and can provide simultaneous feedback on responses.</li>
                <li>- Response: Ask a question to the user and store the response.</li>
            </List>
         </Wrapper>
    )
}

export default chatbot;