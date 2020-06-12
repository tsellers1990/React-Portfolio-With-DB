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
    description: "This is my strongest portfolio piece, Picture-it-Done is designed to connect homeowners (in need of house maintenance or repairs) with contractors that can do repairs for them. While still in an MVP state, users can use Auth0 to login and create job posts. AWS integration is still being built in so that the users will be able to upload photos to the site. Future features will include a chat function, the option for contractors to bid on the jobs, and a page for contractors to view their active/complete jobs."
}
var item2 = {
    name: "Dynamic Reading List",
    image: item2Image,
    link: "https://warm-crag-46689.herokuapp.com/",
    description: "I built this initially as a project for the bootcamp, but it's something that I actually would use. Users of the site can submit a book that they believe that I would read, it's then stored in a mongo database and I check back on it every few months when I run out of books to read."  
}
var item3 = {
    name: "(Public) Dynamic Budget",
    image: item3Image,
    link: "https://morning-river-71853.herokuapp.com/",
    description: "This does exactly what it sounds like, It's a dynamic budget that updates the app every time I add money or subtract it. Future features include the ability to create an account so that your private financial information isn't widely available to the public!"  
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