import * as React from "react";
import "./Home.css";
import Typist from 'react-typist'
import {ShakingImage} from '../../components/ShakingImages/ShakingImage'
import Image from '../../components/Images/PID.PNG'

var gitHubLink = "https://github.com/tsellers1990";
var linkedInLink = "https://www.linkedin.com/in/BrokeEntrepreneur/";
const currentlyLiving = "Denver, Colorado";

class Home extends React.Component {
    state= {
        h1Text : "Hello, my name is Tymothy Sellers.",
        bioText : `I graduated in early June of 2020 from the DU Coding Bootcamp Program and am excited to start working as a Full-Stack Develeoper at your company! I’m currently based out of ${currentlyLiving}! I'm particularly interested in working in one of the main US hubs such as Austin, the San Francisco Bay area, New York, and Denver. I love learning new things and am currently learning Ruby on Rails! Check out my portfolio, I’m SUPER proud of my work particularly on my react Tetris app! All of my apps get updated frequently, so check back frequently for new features`,
        aboutMe : "Future nomad philanthropist/car guy/stoic philosopher",
        finalLine : "Contact Me @: tsellers1990@gmail.com",
        delayAmount : 500
    }
  render() {
    return (
      <div className="wrapper">
      
        <div className="text-wrapper">

            <ShakingImage alt="test" src= {Image}/>

            <Typist className="typistHead">
            <h1 className="headerText defaultText">{this.state.h1Text}</h1>

            <Typist.Delay ms={this.state.delayAmount} />
            <div className="bioText defaultText typistSeconds" >{this.state.bioText}</div>

            <Typist.Delay ms={this.state.delayAmount} />
            <div className="finalText defaultText typistSeconds" >{this.state.finalLine}</div>
            </Typist>  

        </div>
        {/* <div className="nobodyCaresButton">
            <button onClick={() => buttonPress()}>This button will do something someday</button>
        </div> */}
      </div>
    );
  }
}
export default Home;
