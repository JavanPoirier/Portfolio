import React from 'react'
import styled from 'styled-components';
import HighlightText from '../../../components/HighlightText'

import img1 from './CustomTechServices.png';

const Link = styled.a`
    color: #66ccff;
`

const LinkGroup = styled.div`  
    font-size: 2vmax;

    @media screen and (min-width: 800px) {
        font-size: 1.5vmax
    }

    /* @media screen and (min-width: 1200px) {
        font-size: 150%;
    } */
`

const customTechServices = {
    title: "Custom Tech Services",
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
             Leading to a higher performance per dollar system with added touches in asethtics and any other requirements needing to be met by my clients.
             </p>
            <br/>
            <HighlightText color="white">Web Development</HighlightText>
            <p></p>
            <br/>
            <LinkGroup>Visit here: <Link href="http://CustomTechServices.com">http://CustomTechServices.com</Link></LinkGroup>
         </React.Fragment>
    )
}

export default customTechServices;