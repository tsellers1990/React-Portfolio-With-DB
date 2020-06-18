import React from 'react';
import './Home.css';
import picOfMe from "../../Images/myface.JPG"
// idk if I'll need more imports, should be fine but if I do add them here!
var gitHubLink="https://github.com/tsellers1990"
var linkedInLink="https://www.linkedin.com/in/BrokeEntrepreneur/"

function imageClick() {
    alert("This functionality is still under construction :D check back soon to see it working!")
    // window.open(this.link)
    //add logic here to show what portfolio pieces get hit in the db
}

class Home extends React.Component {
    render() {
        return (
            <>
            <div>
                <h1 className="myNameText">Tymothy Sellers</h1>
            </div>
            <div>
                <img className="myFace" src={picOfMe} alt="Tymothy Sellers" />
            </div>
            <div className="bioBlock myBioText">
                <p link={gitHubLink} onClick={imageClick}>Find me on GitHub at:  {gitHubLink}</p>
                <p link={linkedInLink} onClick={imageClick}>Find me on LinkedIn at:  {linkedInLink}</p>
                <p> Short Bio: I love to solve coding challenges and take pictures of cars.</p>
                <p>Experienced Photographer and Web Developer with a demonstrated history of working in the business supplies and equipment industry. Skilled in Operations Management, Management, Project Finance, Direct Sales, and Entrepreneurship. Full Stack / Flex Web Dev that enjoys writing code and solving problems.</p>
            </div>
            </>
        )
    }
}
export default Home;