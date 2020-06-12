import React from 'react';
import './Portfolio.css';

import Wrapper from '../../components/Wrapper/Wrapper';
import Brick from '../../components/ProjectBlock/ProjectBlock';
import item1Image from './Images/PID.PNG'
import item2Image from './Images/React-reading-list.png'
import item3Image from './Images/DynamicBudget.PNG'
import item4Image from './Images/PID.PNG'

var item1 = {
    name: "Picture-It-Done",
    image: item1Image,
    link: "https://picture-it-done.herokuapp.com/",
    description: "temp description"
}
var item2 = {
    name: "Picture-It-Done",
    image: item2Image,
    link: "https://warm-crag-46689.herokuapp.com/",
    description: "temp description"  
}
var item3 = {
    name: "Picture-It-Done",
    image: item3Image,
    link: "https://picture-it-done.herokuapp.com/",
    description: "temp description"  
}
var item4 = {
    name: "Picture-It-Done",
    image: item4Image,
    link: "https://picture-it-done.herokuapp.com/",
    description: "temp description"  
}

class Portfolio extends React.Component {
    render() {
        return (
            <>
            <Wrapper>
                <Brick data = {item1} />
                <Brick data= {item2} />
                <Brick data= {item3} />
                <Brick data= {item4} />
            </Wrapper>
            </>
        )
    }
}
export default Portfolio;