import React, { Component } from 'react';
import Landing from '../components/Title';
import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';

class Home extends Component {
    render() {
        return (
            <div className="Container">
                <Landing />
                <About />
                <Resume />
                <Projects />
            </div>
        );
    }
}

export default Home;
