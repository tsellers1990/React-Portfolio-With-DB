import React from 'react';
import './Home.css';
import picOfMe from "../../Images/myface.JPG"
// idk if I'll need more imports, should be fine but if I do add them here!

class Home extends React.Component {
    render() {
        return (
            <>
            <div>
                <h1 className="myNameText">Tymothy Sellers</h1>
            </div>
            <div>
                <img className="myFace" src={picOfMe} alt="Tymothy Sellers" />
                <p className="myBioText">
                Experienced Photographer and Web Developer with a demonstrated history of working in the business supplies and equipment industry. Skilled in Operations Management, Management, Project Finance, Direct Sales, and Entrepreneurship. Strong operations professional graduated from University of Northern Colorado. 
                Experienced Photographer and Web Developer with a demonstrated history of working in the business supplies and equipment industry. Skilled in Operations Management, Management, Project Finance, Direct Sales, and Entrepreneurship. Strong operations professional graduated from University of Northern Colorado. 
                Experienced Photographer and Web Developer with a demonstrated history of working in the business supplies and equipment industry. Skilled in Operations Management, Management, Project Finance, Direct Sales, and Entrepreneurship. Strong operations professional graduated from University of Northern Colorado. 
                Experienced Photographer and Web Developer with a demonstrated history of working in the business supplies and equipment industry. Skilled in Operations Management, Management, Project Finance, Direct Sales, and Entrepreneurship. Strong operations professional graduated. 
                </p>
            </div>
            </>
        )
    }
}
export default Home;