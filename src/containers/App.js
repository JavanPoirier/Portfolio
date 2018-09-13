import React, { Component } from 'react'

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
            href: null,
            tempHref: null,
        }

        this.changeNav = this.changeNav.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
    }

    changeNav(undefined, e) {
        if (e !== undefined) {
            this.setState({ href: e.props.name });
        }
    }

    toggleHover(href) {
        if (href) {
            this.setState({ tempHref: this.state.href });
            this.setState({ href: href });
        } else {
            this.setState({ href: this.state.tempHref });
            this.setState({ tempHref: null })
        }
        
    }

    render() {
        const { isLoaded, href } = this.state;

        return (
            <React.Fragment>              
                {/* {isLoaded ? () : ()} */}
                <Navbar activeHref={href} callback={this.toggleHover}/>
                <ScrollTrigger name="#Home" onEnter={this.changeNav}>
                    <Intro />
                </ScrollTrigger>
                <ScrollTrigger name="#About" onEnter={this.changeNav}>
                    <About />
                    <Skills />
                </ScrollTrigger>          
                <ScrollTrigger name="#Projects" onEnter={this.changeNav}>
                    <Projects />
                </ScrollTrigger>
                <ScrollTrigger name="#Contact" onEnter={this.changeNav}>
                    <Contact />
                </ScrollTrigger>
                <Footer />
            </React.Fragment>
        );
    }
}