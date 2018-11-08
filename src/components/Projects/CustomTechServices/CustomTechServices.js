import React from 'react'
import styled from 'styled-components';
import HighlightText from '../../../components/HighlightText'

import img1 from './CustomTechServices.png';

const Link = styled.a`
    color: #66ccff;
    font-size: 16px;

    @media screen and (min-width: 800px) {
        font-size: 24px;
    }
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;

    li {
        margin: 10px;
    }
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
             <HighlightText color="white" responsive="18px">Services</HighlightText>
             <br />
            <List>
                <li>- Computer sales and service. Custom builds include enthusiast gaming rigs and servers.</li>
                <li>- Mobile device repair. Cracked screens, battery replacements, and more.</li>
                <li>- Web development includes custom and Wordpress sites.</li>
                <li>- Graphic design, both digital and print.</li>
            </List>
            <br/>
            <Link href="http://CustomTechServices.com">http://CustomTechServices.com</Link>
         </React.Fragment>
    )
}

export default customTechServices;