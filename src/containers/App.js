import React, { Component } from 'react'

import Background from './Background/Background'
import Navbar from './Navbar/Navigation'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import Animate from '../components/Animate'

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            isLoaded: false,
            href: "",
        }

        this.changeNav = this.changeNav.bind(this);
    }

    changeNav(href) {
        this.setState({ href: href });
    }

    render() {
        const { isLoaded, href } = this.state;

        return (
            <React.Fragment>
                {/* {isLoaded ? () : ()}    */}
                <Navbar href={href} />
                <Background />
                <Animate name="intro" callback={() => this.changeNav("#Home")} position="absolute">
                    <Intro />
                </Animate>
                <Animate name="about" callback={() => this.changeNav("#About")}>
                    <About />
                </Animate>
                <Skills />
                <Animate name="projects" callback={() => this.changeNav("#Projects")}>
                    <Projects />
                </Animate>
                <Animate name="contact" callback={() => this.changeNav("#Contact")}>
                    <Contact />
                </Animate>
                <Footer />
            </React.Fragment>
        );
    }
}

