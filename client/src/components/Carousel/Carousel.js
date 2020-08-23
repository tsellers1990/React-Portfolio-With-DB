import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import data from "./data.json";
import "./Carousel.css";
import item1Image from './Images/PID.PNG'
import item2Image from './Images/React-reading-list.png'
import item3Image from './Images/DynamicBudget.PNG'
import item4Image from './Images/Stoic.PNG'

class Carousel extends Component {
  componentDidMount() {
    const options = {
      duration: 3000,
      onCycleTo: () => {
        console.log("New Slide");
      }
    };
    M.Carousel.init(this.Carousel, options);
  }

  renderThis = () => {
    return data.map(i => (
      <a key={i.link} className="carousel-item">
        <img src={item + i + Image} alt="carouselImages" />
      </a>
    ));
  };

  render() {
    return (
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className="carousel"
      >
        {this.renderThis()}
      </div>
    );
  }
}

export default Carousel;