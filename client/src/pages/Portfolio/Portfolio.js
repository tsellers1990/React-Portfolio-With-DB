import React from 'react';
import './Portfolio.css';

import Wrapper from '../../components/Wrapper/Wrapper'

class Portfolio extends React.Component {
    render() {
        return (
            <>
            <Wrapper>
            <div className="proud1Block">
                <h1>Picture-It-Done</h1>
                <img className="projectPic" src={""} alt="Project One" />
                <p>this is a shmedium description of the project</p>
            </div>
            </Wrapper>
            </>
        )
    }
}
export default Portfolio;