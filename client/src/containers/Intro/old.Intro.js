import React, { Component } from 'react';
import ReactFitText from 'react-fittext';

export default class Intro extends Component {
    render() {
        const styles = {
            wrapper: {
                height: "inherit",
                verticalAlign: "middle",
                padding: "0 10% 0 10%"
            },
            name: {
                textTransform: "uppercase",
                color: "#ffffff",
                fontFamily: "CPMono",
                // fontSize: "8em",

                WebkitPerspective: "150px", /* Chrome, Safari, Opera  */
                perspective: '150px',
                perspectiveOrigin: "left",
            },
            text: {
                padding: "0 50px 0 50px",
                width: "fit-content",
                backgroundColor: "#090909",
                marginBottom: "0px",
                WebkitTransform: "rotateX(0deg) rotateY(5deg)",
                transform: "rotateX(0deg) rotateY(5deg)",
            },
            last: {
                // boxShadow: "10px 10px 50px rgba(0, 0, 0, .5)",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, .5)",
            },
            test: {
                position: "absolute",
                textTransform: "uppercase",
                fontFamily: "Arial",
                fontSize: "3em",
                fontWeight: "bold",
                color: "#090909",
            }
        }

        return (
            <div id="Home" className="container-fluid">
                <div id="Intro" className="row align-items-center" style={styles.wrapper}>
                    <div className="col col-md-12 col-xl-6" style={styles.name}>
                        <ReactFitText compressor={-0.5} maxFontSize={200} minFontSize={75}>
                            <h1 style={styles.text}>Javan</h1>
                           
                            {/* <div style={styles.text}>Javan</div>
                            <div style={Object.assign(styles.text, styles.last)}>Poirier_</div> */}
                        </ReactFitText>
                        <ReactFitText compressor={-0.5} maxFontSize={200} minFontSize={75}>
                            <h1 style={styles.text}>Poirier_</h1>               
                        </ReactFitText>
                        
                    </div>
                    <div className="col col-md-12 col-xl-6" style={{position: "relative"}}>
                        <h2 style={styles.test}>Fullstack Developer</h2>
                    </div>
                </div>
            </div>
        );
    }
}