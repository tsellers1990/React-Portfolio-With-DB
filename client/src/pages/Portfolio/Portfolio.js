import React from "react";
import "./Portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import item1Image from '../../components/Images/PID.PNG'
import item2Image from '../../components/Images/React-reading-list.png'
// import item3Image from '../../components/Images/DynamicBudget.PNG'
import item4Image from '../../components/Images/Stoic.PNG'
import item5Image from '../../components/Images/GroupDrive.png'
import item6Image from '../../components/Images/Tetris.PNG'

var item1 = {
    name: "Picture-It-Done",
    image: item1Image,
    link: "https://picture-it-done.herokuapp.com/",
    github: "https://github.com/tsellers1990/Picture-It-Done",
    description: "This is my strongest portfolio piece, Picture-it-Done is designed to connect homeowners (in need of house maintenance or repairs) with contractors that can do repairs for them. While still in an MVP state, users can use Auth0 to login and create job posts. AWS integration is still being built in so that the users will be able to upload photos to the site. Future features will include a chat function, the option for contractors to bid on the jobs, and a page for contractors to view their active/complete jobs."
}
// var item2 = {
//     name: "Dynamic Reading List",
//     image: item2Image,
//     link: "https://warm-crag-46689.herokuapp.com/",
//     github: "",
//     description: "I built this initially as a project for the bootcamp, but it's something that I actually would use. Users of the site can submit a book that they believe that I would read, it's then stored in a mongo database and I check back on it every few months when I run out of books to read."
// }
var item6 = {
    name: "Tetris",
    image: item6Image,
    link: "https://tys-tetris.herokuapp.com/",
    github:"https://github.com/tsellers1990/Ty-tris-aka-tetris",
    description: "Stoicism is a big part of my life, this MERN app allows you to submit a quote from a Stoic and have it show on the main page! (I go through this for my LinkedIn quotes)"
}
// var item3 = {
//     name: "(Public) Dynamic Budget",
//     image: item3Image,
//     link: "https://morning-river-71853.herokuapp.com/",
//     description: "This does exactly what it sounds like, It's a dynamic budget that updates the app every time I add money or subtract it. Future features include the ability to create an account so that your private financial information isn't widely available to the public!"
// }
var item4 = {
    name: "Stoic-Quotify",
    image: item4Image,
    link: "https://stoic-quotify.herokuapp.com/",
    github: "https://github.com/tsellers1990/Stoic-Quotes",
    description: "Stoicism is a big part of my life, this MERN app allows you to submit a quote from a Stoic and have it show on the main page! (I go through this for my LinkedIn quotes)"
}
var item5 = {
    name: "GroupDrive",
    image: item5Image,
    link: "https://github.com/tsellers1990/groupdrive",
    // description: "Stoicism is a big part of my life, this MERN app allows you to submit a quote from a Stoic and have it show on the main page! (I go through this for my LinkedIn quotes)"
}

function linkClick(data, handoff) {
    // githubGetter(handoff)
    window.open(data)
    window.open(handoff)
  //add logic here to show what portfolio pieces get hit in the db
}

class Portfolio extends React.Component {
  render() { 
    return (
    <>
        <div className="reactContainer">
            <h3 className="reactHeader defaultText">React.js Projects</h3>
            <Carousel className="carousel">
            <div className="carousel-items" onClick={() => linkClick(item6.link, item6.github)}>
                <img src={item6Image} />
                <p>Tetris</p>
            </div>            
            <div className="carousel-items" onClick={() => linkClick(item1.link, item1.github)}>
                <img src={item1Image} />
                <p>Picture-It-Done</p>
            </div>
            <div className="carousel-items" onClick={() => linkClick(item4.link, item4.github)}>
                <img src={item4} />
                <p>React-Reading-List</p>
            </div>
            {/* <div className="carousel-items" onClick={() => linkClick(item3.link)}>
                <img src={item3Image} />
                <p>Online/Offline Budget</p>
            </div>
            <div className="carousel-items" onClick={() => linkClick(item4.link)}>
                <img src={item4Image} />
                <p>Stoic-Quotes</p>
            </div> */}
            </Carousel>
        </div>

        <div className="reactNativeContainer">
            <h3 className="reactHeader defaultText">React-Native Projects</h3>
            <Carousel className="carousel">
            <div className="carousel-items" onClick={() => linkClick(item5.link)}>
                <img src={item5Image} />
                <p>GroupDrive</p>
            </div>
            </Carousel>
        </div>
    </>
    )
  }
}
export default Portfolio;
