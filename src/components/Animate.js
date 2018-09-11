import React, { Component } from 'react'

import { throttle } from 'lodash'

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
            case "absolute":
                position = 0;
                break;
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
        window.addEventListener("scroll", throttle(this.logDistance, 500));
    }

    logDistance = () => {
        let scrollPos = window.pageYOffset;
        //Position of the component relative to page height;
        const compPos = this.state.position;  

        var compHeight = this.component.current.clientHeight;
        // console.log(this.props.name, "compPos: " + compPos, "scrollPos: " + scrollPos, "Bottom: " + (compPos + compHeight));

        if (this.props.once) {
            if (this.state.inView === false) {
                if (scrollPos >= compPos) {
                    this.setState({ inView: true }, this.props.callback());
                    window.removeEventListener("scroll", throttle(this.logDistance, 1000));
                }
            }     
        } else {
            if (scrollPos >= compPos && scrollPos <= (compPos + compHeight)) {
                this.props.callback();
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