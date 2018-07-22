import React, { Component } from 'react';

export default class Skills extends Component {
    render() {
        const styles = {
            container: {
                height: "500px",
                display: "block",
                padding: "0 20% 0 20%",
            },
            header: {
                color: "#090909",
                fontFamily: "CPMono"
            }
        }

        return(
            <div style={styles.container}>
                <h1 style={styles.header}>Skills</h1>
            </div>
        );
    }
}