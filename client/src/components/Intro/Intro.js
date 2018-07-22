import React, { Component } from 'react';

export default class Intro extends Component {
    render() {
        const styles = {
            wrapper: {
                display: "table-cell",
                verticalAlign: "middle",
                padding: "0 15% 0 15%"
            },
            name: {
                color: "#ffffff",
                fontFamily: "CPMono",
                fontSize: "8em",      

                WebkitPerspective: "150px", /* Chrome, Safari, Opera  */
                perspective: '150px',
                perspectiveOrigin: "left",
            },
            text: {
                padding: "0 50px 0 50px",
                width: "fit-content",
                backgroundColor: "#090909",               
                
                WebkitTransform: "rotateX(0deg) rotateY(5deg)",
                transform: "rotateX(0deg) rotateY(5deg)",
                
            },
            last: {
                // boxShadow: "10px 10px 50px rgba(0, 0, 0, .5)",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, .5)",
            }
        }

        return (
            <div id="intro" style={styles.wrapper}>
                <div style={styles.name}>
                    <div style={styles.text}>Javan</div>
                    <div style={Object.assign(styles.text, styles.last)}>Poirier</div>
                </div>
            </div>
        );
    }
}