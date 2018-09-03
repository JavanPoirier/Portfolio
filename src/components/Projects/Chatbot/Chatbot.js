import React from 'react'
import styled from 'styled-components';
import HighlightText from '../../../components/HighlightText'

import img1 from './Course.png';
import img2 from './Event.png';

const Link = styled.a`
    color: #66ccff;
`

const chatbot = {
    title: "Chatbot",
    slide: img1,
    slides: [img1, img2],
    description: (
        <React.Fragment>
            <p>
            Through my side buisness I offer general consumers and small buisnesses a variety of products, services, and solutions.
            </p>
            <br/>
             <HighlightText color="white">Computer Sales/Service</HighlightText>
             <p>
             As a computer hardware enthusiast the custom built systems I build for my customers reflect my knowledge and research in hardware performance and benchmarks.
             Leading to a higher value per dollar system with added touches in asethtics and any other requirements needing to be met by my clients.
             </p>
            <br/>
            <HighlightText color="white">Web Development</HighlightText>
            <p></p>
            <br/>
            <h5>Visit here:&nbsp;<Link href="http://CustomTechServices.com">http://CustomTechServices.com</Link></h5>

            <p>
            This Chatbot web appication was developed with the MERN (Mongo Express React Node) stack. The creation of courses by instructors
    allows for course contacts such as students to be added. Events are then set throughout the duration of the course, which 
    are triggered by a specified date and time. These events are sent by SMS using the Twilio API. A collection of events 
    were designed with the Twilio studio platform to allow for dynamic customization of the events.
    
    - Info: Allows for up to 3 custom messages to be sent to contacts.
    - Sentiment: Request a contacts feedback and respond accordingly to negative, neutral or positive responses.
    - Quiz: Create a quiz with multiple questions and can provide simultaneous feedback on responses.
    - Response: Ask a question to the user and store the response.
            </p>
         </React.Fragment>
    )
}

export default chatbot;