import React, { Component } from 'react';

import PropTypes from 'prop-types'

import Background from './Background/Background';
import Navbar from './Navbar/Navigation';
import Intro from './Intro/Intro';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            isLoaded: false,      
        }

        // this.resize = this.resize.bind(this);
    }

    static contextTypes = {
        parallaxController: PropTypes.object.isRequired,
    };

    componentDidMount() {
        console.log(this.context);
        this.context.parallaxController.update();
        // window.addEventListener("resize", this.resize);  
        // this.resize();
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

