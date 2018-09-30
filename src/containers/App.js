import React, { Component } from 'react'
import _ from 'lodash';

import Loader from './Loader/Loader'
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
            isLoading: true,
            href: null,
            tempHref: null,
            paused: false,
        }

        this.supported = this.supported.bind(this);
        this.changeNav = this.changeNav.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
        this.pauseScroll = this.pauseScroll.bind(this);
    }

    supported(bool) {
        if (bool) {
            this.setState({ isLoading: false });
        }
    }

    changeNav(href, e) {
        if (e !== undefined) {
            this.setState({ href: e.props.name });
            this.setState({ tempHref: e.props.name });
        } else {
            this.setState({ href: href });
            this.setState({ tempHref: href });
        }
    }

    toggleHover(href) {
        if (href) {
            this.setState({ tempHref: href });
        } else {
            this.setState({ tempHref: this.state.href });
        }
    }

    pauseScroll(href) {
        console.log('pause', href);
        if (href !== undefined) {
            this.setState({ paused: true, href: href });
        }
    }

    render() {
        const { isLoading, tempHref } = this.state;

        if (isLoading) {
            return <Loader isLoading={isLoading} supported={this.supported} />
        } else {
            return (
                <React.Fragment>
                    <Navbar activeHref={tempHref} toggleHover={this.toggleHover} pauseScroll={this.pauseScroll} />
                    <Intro scrollTrigger={<ScrollTrigger name="#Home" onEnter={this.changeNav} throttleScroll={1} throttleResize={1} />} />
                    <About scrollTrigger={<ScrollTrigger name="#About" onEnter={this.changeNav} throttleScroll={1} throttleResize={1} />} />
                    <Skills scrollTrigger={<ScrollTrigger name="#About" onEnter={this.changeNav} throttleScroll={1} throttleResize={1} />} />
                    <ScrollTrigger name="#Projects" onEnter={this.changeNav} throttleScroll={1} throttleResize={1}>
                        <Projects />
                    </ScrollTrigger>
                    <Contact scrollTrigger={<ScrollTrigger name="#Contact" onEnter={this.changeNav} onExit={() => this.changeNav("#Projects")} throttleScroll={1} throttleResize={1} />} />
                    <Footer />
                </React.Fragment>
            );
        }
    }
}