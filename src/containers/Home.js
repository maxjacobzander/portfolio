import React, { Component } from 'react';
import Landing from '../components/Title';
import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../style.css';

class Home extends Component {
    render() {
        return (
            <div className="Container">
                <Landing />
                <About />
                <Resume />
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default Home;
