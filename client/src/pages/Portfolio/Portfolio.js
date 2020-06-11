import React from 'react';
import './Portfolio.css';

import Wrapper from '../../components/Wrapper/Wrapper';
import Brick from '../../components/ProjectBlock/ProjectBlock';
import project3Image from './Images/PID.PNG'


var project3 = {
    name: "Picture-It-Done",
    image: project3Image,
    link: "",
    description: "temp description"
}

class Portfolio extends React.Component {
    render() {
        return (
            <>
            <Wrapper>
                <Brick data = {project3}/>
            </Wrapper>
            </>
        )
    }
}
export default Portfolio;