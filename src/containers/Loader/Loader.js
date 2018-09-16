import React, { Component } from 'react'

import styled from 'styled-components'
import { browserName, browserVersion } from 'react-device-detect'

import loading from './loading.gif'


const Container = styled.div`
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
`
//Centered, Both Horizontally and Vertically
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
`

const Text = styled.p`
    font-family: CPMono;
    font-size: 1em;
    margin-top: 10%;
`

export default class Loader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            supported: true,
        }
    }

    componentDidMount() {
        var name = browserName.toLowerCase();
        var version = browserVersion.split('.')[0] + '' + browserVersion.split('.')[1];

        if (this.checkVersion(name, version)) {
            this.props.supported(true);
        } else {
            this.props.supported(false);
            this.setState({ supported: false });
        }
    }

    checkVersion(browser, version) {
        const versions = {
            chrome: 630,
            edge: 170,
            firefox: 610,
            ie: 110,
            safari: 111,
            iosSafari: 103,
            samsung: 72,
        }

        switch (browser) {
            case 'chrome':
                if (version > versions.chrome) return true;
                break;
            case 'edge':
                if (version > versions.edge) return true;
                break;
            case 'firefox':
                if (version > versions.firefox) return true;
                break;
            case 'ie':
                if (version > versions.ie) return true;
                break;
            case 'safari':
                if (version > versions.safari) return true;
                break;
            case 'mobile safari':
                if (version > versions.iosSafari) return true;
                break;
            case 'samsung browser':
                if (version > versions.samsung) return true;
                break;
            default:
                return false;
        }
    }


    render() {
        const { supported } = this.state;
        const { isLoading } = this.props;

        if (isLoading) {
            return (
                <Container>
                    <Wrapper>
                        <img src={loading} alt="loading..." />
                        {!supported ? (
                            <Text>
                                Your browser is outdated and is not supported.
                            </Text>
                        ) : null}
                    </Wrapper>

                </Container>
            )
        } else {
            return null
        }
    }
}