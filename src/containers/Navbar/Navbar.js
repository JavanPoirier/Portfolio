import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Navigation extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        let menu = document.getElementById("navbarNavAltMarkup");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        } else menu.classList.add("show");
    }

    render() {
        const styles = {
            wrapper: {
                width: "100%",
                height: "75px",
                position: "fixed",
                // textAlign: "center",
                backgroundColor: "#090909",
                zIndex: 1,
                boxShadow: "10px 10px 50px rgba(0, 0, 0, .5)",
            },
            navbar: {
                height: "inherit",
                textAlign: "center",
            },
            item: {
                height: "inherit",
                display: "inline-block",
                marginRight: "-4px",  /* inline-block gap fix */
                color: "#ffffff",
                padding: "22px",
                textDecoration: "none",
                WebkitTransition: "background 0.3s linear",
                MozTransition: "background 0.3s linear",
                MsTransition: "background 0.3s linear",
                OTransition: "background 0.3s linear",
                transition: "background 0.3s linear",
                xIndex: "9",
            },
            text: {
                marginLeft: "10px",
                display: "inline",
            }
        };

        return (
            <div style={styles.wrapper}>
                <div style={styles.navbar}>
                    <AnchorLink offset="150" className="nav-item" style={styles.item} href="#Home"><FontAwesomeIcon icon={faHome} /><div className="nav-text" style={styles.text}>Home</div></AnchorLink>
                    <AnchorLink offset="150" className="nav-item" style={styles.item} href="#About"><FontAwesomeIcon icon={faUser} /><div className="nav-text" style={styles.text}>About</div></AnchorLink>
                    <AnchorLink offset="150" className="nav-item" style={styles.item} href="#Projects"><FontAwesomeIcon icon={faCode} /><div className="nav-text" style={styles.text}>Projects</div></AnchorLink>
                    <AnchorLink offset="150" className="nav-item" style={styles.item} href="#Contact"><FontAwesomeIcon icon={faEnvelope} /><div className="nav-text" style={styles.text}>Contact</div></AnchorLink> 
                </div>
            </div>
        );
    }
}