import React, { Component } from 'react';

import me from '../../img/Me.jpg';

export default class About extends Component {
    render() {
        const styles = {
            container: {
                position: "relative",
                height: "600px",
                padding: "0px 20% 0px 20%",
                backgroundColor: "#090909",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, .5)",
            },
            header: {
                color: "white",
                fontFamily: "CPMono",
                textAlign: "center",
                padding: "15px 0 0 0",
            },
            image: {
                maxWidth: "inherit",
            },
            wrapper: {
                display: "contents"
            }
        }

        return (
            <div id="About" className="container-fluid" style={styles.container}>
            <h1>About</h1>
                <div className="row align-items-center justify-content-center" style={styles.row}>
                    <div className="col col-sm-12 col-md-5" style={styles.wrapper}>
                        <img src={me} alt="Me" style={styles.image}></img>
                    </div>
                    <div className="col col-auto"></div>
                    <div className="col col-sm-12 col-md-5" style={{ float: "right", color: "white" }}>
                        <div className="row">
                            <div>Facial Recognition Data:</div>
                        </div>
                        <br/>
                        <div className="row">
                            <div>Name: Javan Poirier</div>
                        </div>
                        <div className="row">
                            <div>Occupation: Fullstack Developer</div>
                        </div>
                        <div className="row">
                            <div>Location: Saint John, New Brunswick</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}