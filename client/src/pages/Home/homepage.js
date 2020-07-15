import * as React from "react";
import "./Home.css";
import Typist from 'react-typist'

var gitHubLink = "https://github.com/tsellers1990";
var linkedInLink = "https://www.linkedin.com/in/BrokeEntrepreneur/";
const h1Text = "Hello, my name is Tymothy Sellers.";
// let stringArray = [];
// const onPage = [];

// function coolLetterPrint(string) {
//   stringArray = string.split(""); //splits the string into an array of the letters
// 
//   for (var i = 0; i < stringArray.length; i++) {
    //   
    // let currentLetter = stringArray[i]; //setting letter to a var for scale
// 
    // setTimeout(function () { //slows the loop down for dramatic... effect
    //   onPage.push(currentLetter);
    //   console.log(onPage);
    // }, i * 500);
//   }
// }

// coolLetterPrint(h1Text);

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div>
            <Typist>
            <h1 className="headerText">{h1Text}</h1>
            <Typist.Delay ms={500} />
            <div className="bioText">THIS IS the BNIOT </div>
            </Typist>  
        </div>
      </div>
    );
  }
}
export default Home;
