import React, { Component } from 'react'

import Background from './Background/Background'
import Navbar from './Navbar/Navigation'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            isLoaded: false,      
        }
    }

    render() {
        const { isLoaded } = this.state;

        return (              
            <React.Fragment>
                {/* {isLoaded ? () : ()}    */}
                <Navbar />
                <Background />
                <Intro />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}

