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
            paused: false,
        }

        this.changeNav = this.changeNav.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
        this.pauseScroll = this.pauseScroll.bind(this);
    }

    changeNav(href, e) {
            if (e !== undefined) {
                console.log('e', e.props.name)
                this.setState({ href: e.props.name });
            } else {
                console.log('href', href)
                this.setState({ href: href });
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

    pauseScroll(href) {
        if (href !== undefined) {
            this.setState({ paused: true, href: href  });
        }    
    }

    render() {
        const { isLoaded, href } = this.state;

        return (
            <React.Fragment>              
                {/* {isLoaded ? () : ()} */}
                <Navbar activeHref={href} toggleHover={this.toggleHover} pauseScroll={this.pauseScroll}/>
                <Intro scrollTrigger={<ScrollTrigger name="#Home" onEnter={this.changeNav} throttleScroll={1} throttleResize={1}/>}/>
                <About scrollTrigger={<ScrollTrigger name="#About" onEnter={this.changeNav} throttleScroll={1} throttleResize={1}/>}/>   
                <Skills scrollTrigger={<ScrollTrigger name="#About" onEnter={this.changeNav} throttleScroll={1} throttleResize={1}/>}/>       
                <ScrollTrigger name="#Projects" onEnter={this.changeNav} throttleScroll={1} throttleResize={1}>
                    <Projects />
                </ScrollTrigger>              
                <Contact scrollTrigger={<ScrollTrigger name="#Contact" onEnter={this.changeNav} onExit={() => this.changeNav("#Projects")} throttleScroll={1} throttleResize={1}/>}/>
                <Footer />
            </React.Fragment>
        );
    }
}