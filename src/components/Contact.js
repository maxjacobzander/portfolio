import React, { Component } from 'react';

class Contact extends Component {

    handleClick() {
        window.location.href = "mailto:maxjacobzander@gmail.com";
    }

    render() {
        return (
            <div>
                
                <button id="contact-button" onClick={this.handleClick}>Contact Me</button>
            </div>
        );
    }
}

export default Contact;
