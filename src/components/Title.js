import React, { Component } from 'react';
import Max0002 from '../documents/Max_0002.jpg';

class Title extends Component {
    render() {
        return (
            <div className="title" style={{ 
                backgroundImage: `url(${Max0002})`}}>
                <h1>Max Zander</h1>
                <h1>Full-Stack Web Developer</h1>
            </div>
        );
    }
}

export default Title;