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
            My final college project ISDP (Individual Software Development Project), was a product distribution management system for a fictional company called Gurd's Bottling Company roleplayed by instructors. A prior course, Systems Analysis had us the consultant company;  as in classmates roleplay as analysts for Gurd's. This involved understanding the current processes documenting possible improvements and developing a later proposed solution. This was more than just a software solution, it involved business processes and procedures such as invoicing/billing, loading and unloading trucks and vending machines, scheduling and, more.
            </p>
            <p>
            After the analysis phase, the class collectively designed a software solution defining application features, database structure, and test data. Then we individually developed a software solution following the defined specifications.
            </p>
         </React.Fragment>
    )
}

export default gurds;