import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        const styles = {
            container: {
                width: "100%",
                height: "500px",
                display: "block",
                padding: "0 20% 0 20%"
            },
            header: {
                color: "#090909",
                fontFamily: "CPMono"
            }
        }

        return(
            <div style={styles.container}>
                <h1 style={styles.header}>Contact</h1>
            </div>
        );
    }
}