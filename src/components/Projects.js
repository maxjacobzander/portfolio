import React, { Component } from 'react';
import LiquorCabinet from '../documents/Liquor_Cabinet.jpg';
import EarTrainer from '../documents/Ear_Trainer.jpg';
import Bucket from '../documents/Bucket.jpg';
import BravoScoreLibrary from '../documents/Bravo_Score_Library.jpg'

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            active: false
        }
    }

    panels = document.querySelectorAll('.panel')

    



    render() {
        let className = 'panel';
        if (this.state.active === true) {
            className += 'active';
        }

        return (
            <div className="project-container">
                <div className="panel active" style={{backgroundImage: `url(${LiquorCabinet})`}}>
                    <h3>Liquor Cabinet (React/Redux Front-End, Rails API Back-End)</h3>
                </div>
                <div className="panel" style={{backgroundImage: `url(${EarTrainer})`}}>
                    <h3>Ear Trainer (Vanilla JavaScript Front-End, Rails API Back-End)</h3>
                </div>
                <div className="panel" style={{backgroundImage: `url(${Bucket})`}}>
                    <h3>Bucket (Rails Application)</h3>
                </div>
                <div className="panel" style={{backgroundImage: `url(${BravoScoreLibrary})`}}>
                    <h3>Bravo Personal Score Library Catalogue (Sinatra Application)</h3>
                </div>
            </div>
        );
    }
}

export default Projects;
