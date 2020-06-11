import React from 'react';
import './Portfolio.css';

import Wrapper from '../../components/Wrapper/Wrapper';
import Brick from '../../components/ProjectBlock/ProjectBlock';


var project3 = {
    name: "Picture-It-Done",
    image: "",
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