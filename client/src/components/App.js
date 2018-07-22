import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { ParallaxProvider } from 'react-scroll-parallax';

import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Intro from './Intro/Intro';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default class App extends Component {
    constructor() {
        super();

        this.resize = this.resize.bind(this);
        this.background = React.createRef();
        this.intro = React.createRef();
    }

    resize() {
        //Resize background and canvas
        ReactDOM.findDOMNode(this.background).style.width = window.innerWidth + "px";
        ReactDOM.findDOMNode(this.background).style.height = window.innerHeight + 200 + "px";
        ReactDOM.findDOMNode(this.background).getElementsByTagName('canvas')[0].style.height = window.innerHeight + 200 + "px";

        //Resize intro to take full
        ReactDOM.findDOMNode(this.intro).style.height = window.innerHeight + "px";
        
        //Update event sets particles value from resolution
        Background.forceUpdate;

        this.forceUpdate();
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    render() {
        return (
            <ParallaxProvider>
                <Navbar />
                <Background ref={(el) => { this.background = el }} />
                <Intro ref={(el) => { this.intro = el }} />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </ParallaxProvider>
        );
    }
}