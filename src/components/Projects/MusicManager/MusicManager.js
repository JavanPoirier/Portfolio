import React from 'react'
import styled from 'styled-components';
import HighlightText from '../../../components/HighlightText'

import img1 from './MusicManager.png';

const Link = styled.a`
    color: #66ccff;
`

const musicManager = {
    title: "Music Manager",
    slide: img1,
    slides: [img1],
    description: (
        <React.Fragment>
            <p>
            A simple, yet only useful to me application I built during my first year of college and assisted in my understanding of 
            OOP (Object Oriented Programming). This application takes the filenames of songs and parses them according to my specified 
            filename structure, verify the filenames and song info using the existing library then applies the correct meta tags to the file.
            </p>
            <h5>View here:&nbsp;<Link href="https://github.com/Speedrookie/Music-Manager">Music-Manager</Link></h5>
         </React.Fragment>
    )
}

export default musicManager;