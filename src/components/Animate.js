import React, { Component } from 'react'

export default class Animate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            position: null,
            inView: false,
        }

        this.component = React.createRef();
        this.logDistance = this.logDistance.bind(this);
    }

    componentDidMount() {
        const component = this.component.current;

        let position;
        switch (this.props.position) {
            case "top":
                position = (component.offsetTop - window.innerHeight) - (this.props.offset ? this.props.offset : 0);
                break;
            case "bottom":
                position = window.innerHeight - (this.props.offset ? this.props.offset : 0);
                break;
            default: 
                position = ((component.offsetTop - window.innerHeight) + (Math.ceil(component.clientHeight / 2))) - (this.props.offset ? this.props.offset : 0);
        }

        this.setState({ position: position }, () => this.logDistance())
        this.addEventListener();
    }

    addEventListener() {
        window.addEventListener("scroll", () => this.logDistance())
    }

    logDistance() {
        if (this.state.inView === false) {
            const position = this.state.position;
            let distance = window.pageYOffset

            if (position <= distance) {
                this.setState({ inView: true }, this.props.callback());
            }
        }
    }

    render() {
        return (
            <div ref={this.component}>
                {this.props.children}
            </div>
        )
    }
}