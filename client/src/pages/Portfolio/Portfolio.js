import React from 'react';
import './Portfolio.css';

import Wrapper from '../../components/Wrapper/Wrapper';
import Brick from '../../components/ProjectBlock/ProjectBlock';
import project3Image from './Images/PID.PNG'


var project3 = {
    name: "Picture-It-Done",
    image: project3Image,
    link: "https://picture-it-done.herokuapp.com/",
    description: "temp description"
}
var item2 = {
    name: "Picture-It-Done",
    image: project3Image,
    link: "https://picture-it-done.herokuapp.com/",
    description: "temp description"  
}

class Portfolio extends React.Component {
    render() {
        return (
            <>
            <Wrapper>
                <Brick data = {project3} />
                <Brick data= {item2} />
                <Brick data= {item2} />
                <Brick data= {item2} />
            </Wrapper>
            </>
        )
    }
}
export default Portfolio;