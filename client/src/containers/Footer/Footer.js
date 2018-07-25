import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        const styles = {
            container: {
                width: "100%",
                height: "75px",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: "#090909",
            },
            text: {
                color: "#ffffff",
                fontFamily: "CPMono",
            }
        }

        return (
            <div id="Footer" style={styles.container}>
                <h4 style={styles.text}>Javan Poirier 2018</h4>
            </div>
        )
    }
}