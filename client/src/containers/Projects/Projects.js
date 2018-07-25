import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        const styles = {
            container: {
                height: "500px",
                backgroundColor: "#090909",
                boxShadow: "25px 25px 25px 25px #090909"
            },
            header: {
                textAlign: "center",
                fontFamily: "CPMono",
                color: "#ffffff"
            }
        }
        
        return(
            <div id="Projects" className="shadow-lg" style={styles.container}>
                <h1 style={styles.header}>Projects</h1>
            </div>
        );
    }
}