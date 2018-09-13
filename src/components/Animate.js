import React, { Component } from 'react'

import { throttle } from 'lodash'
import PropTypes from 'prop-types'

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

    static propTypes = {
        once: PropTypes.bool,
        callback: PropTypes.func.isRequired,
        offset: PropTypes.number,
        position: PropTypes.string,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.position !== nextProps.position) {
            return {
                position: nextProps.position,
            }
        }
        return null;
    }

    componentDidMount() {
        this.setPosition();
        window.addEventListener("scroll", throttle(this.logDistance, 500));
    }

    setPosition() {
        const component = this.component.current;

            //Position is at which point of the component the animation is fired.
            var position = this.props.position ? this.props.position : "default";
            switch (position) {
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

            console.log(position);
            this.setState({ position: position }, () => this.logDistance())
    }

    logDistance() {
        console.log(this.state.position);
        let scrollPos = window.pageYOffset;
        //Position of the component relative to page height;
        const compPos = this.state.position;

        var compHeight = this.component.current.clientHeight;
        console.log(this.props.name, "compPos: " + compPos, "scrollPos: " + scrollPos, "Bottom: " + (compPos + compHeight));

        if (this.props.once) {
            console.log(this.props);
            if (this.state.inView === false) {
                if (scrollPos >= compPos) {
                    this.setState({ inView: true }, this.props.callback());
                    // window.removeEventListener("scroll", throttle(this.logDistance, 1000));
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
            <div style={{ height: "100%" }} ref={this.component}>
                {this.props.children}
            </div>
        )
    }
}