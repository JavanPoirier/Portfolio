import React from 'react'
import styled from 'styled-components';
import HighlightText from '../../../components/HighlightText'

import img1 from './Customer.png';

const Link = styled.a`
    color: #66ccff;
`

const gurds = {
    title: "Gurds Product Management System",
    slide: img1,
    slides: [img1],
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
         </React.Fragment>
    )
}

export default gurds;