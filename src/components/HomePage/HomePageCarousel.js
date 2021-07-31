import React, { Component } from "react";
import chicago from "../../images/chicago.jpg";
import ny from "../../images/ny.jpg";
import la from "../../images/la.jpg";
import { Carousel } from "react-bootstrap";

class HomePageCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={chicago} alt="Chikago" />
         
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ny} alt="New York" />
          
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={la} alt="Los Angels" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomePageCarousel;
