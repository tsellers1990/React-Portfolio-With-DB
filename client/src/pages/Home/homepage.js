import * as React from "react";
import "./Home.css";
import Typist from 'react-typist'

var gitHubLink = "https://github.com/tsellers1990";
var linkedInLink = "https://www.linkedin.com/in/BrokeEntrepreneur/";
const currentlyLiving = "Denver, Colorado";

class Home extends React.Component {
    state= {
        h1Text : "Hello, my name is Tymothy Sellers.",
        bioText : `I graduated in early June of 2020 from the DU Coding Bootcamp Program and am ready to start working as a junior dev at your company! Currently based out of ${currentlyLiving}, I am ready and willing to relocate on a moments notice! I'm particularly interested in working in one of the main US hubs such as Austin, the San Francisco Bay area, New York, and Denver.`,
        aboutMe : "Future nomad philanthropist/car guy/stoic philosopher",
        finalLine : "Contact Me @: tsellers1990@gmail.com",
        delayAmount : 500
    }
  render() {
    return (
      <div className="wrapper">
        <div>
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
