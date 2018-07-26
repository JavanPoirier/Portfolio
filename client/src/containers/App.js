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
import Footer from './Footer/Footer';

export default class App extends Component {
    constructor() {
        super();

        this.resize = this.resize.bind(this);
        this.background = React.createRef();
        this.intro = React.createRef();
    }

    resize() {
        //Change height after container App is loaded. Values not ready
        var test = document.getElementById("root").scrollHeight;
        console.log(test);

        
        //Resize background and canvas
        ReactDOM.findDOMNode(this.background).style.width = window.innerWidth + "px";
        ReactDOM.findDOMNode(this.background).style.height = test + "px";
        ReactDOM.findDOMNode(this.background).getElementsByTagName('canvas')[0].style.height = window.innerHeight + 100 + "px";

        //Resize intro to take full
        ReactDOM.findDOMNode(this.intro).style.height = window.innerHeight + "px";
        
        //Update event sets particles value from resolution
        Background.forceUpdate;

        console.log(window.screen.height);
        console.log(window.innerHeight);
        console.log(document.getElementById("root").scrollHeight);

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
                <Footer />
            </ParallaxProvider>
        );
    }
}