import React, { Component } from 'react';

import me from '../../img/Me.jpg';

export default class About extends Component {
    render() {
        const styles = {
            container: {
                height: "500px",
                padding: "0px 20% 0px 20%",
                backgroundColor: "#090909",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, .5)",
            },
            header: {
                color: "white",
                fontFamily: "CPMono"
            },
            image: {
                position: "relative",
            }
        }

        return (
            <div id="about" style={styles.container}>
                <h1 style={styles.header}>About</h1>
                <div>
                    <div>Photo
                    <img src={me} style={styles.image}></img>
                    </div>
                    <div>Desc</div>
                </div>
            </div>
        );
    }
}