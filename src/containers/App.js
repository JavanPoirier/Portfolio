import React, { Component } from 'react'

import Background from './Background/Background'
import Navbar from './Navbar/Navigation'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import ScrollTrigger from 'react-scroll-trigger'

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
            href: "#Home",
        }

        this.changeNav = this.changeNav.bind(this);
    }

    changeNav(href) {
        console.log(href);
        if (href !== undefined) {
            this.setState({ href: href });
        }      
    }

    render() {
        const { isLoaded, href } = this.state;

        return (
            <React.Fragment>
                {/* {isLoaded ? () : ()} */}
                <Navbar activeHref={href} callback={() => this.changeNav()}/>
                <Background />
                <ScrollTrigger onEnter={() => this.changeNav("#Home")}>
                    <Intro />
                </ScrollTrigger>
                <ScrollTrigger onEnter={() => this.changeNav("#About")}>
                    <About />
                </ScrollTrigger>
                <Skills />
                <ScrollTrigger onEnter={() => this.changeNav("#Projects")}>
                    <Projects />
                </ScrollTrigger>
                <ScrollTrigger onEnter={() => this.changeNav("#Contact")}>
                    <Contact />
                </ScrollTrigger>
                <Footer />
            </React.Fragment>
        );
    }
}