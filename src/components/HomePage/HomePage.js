import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import HomeCard from "./HomeCard";

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 mt-3">
            <HomePageCarousel />
          </div>
        </div>
        <div class="mx-auto mt-3" ></div>
        <HomeCard />
      </div>
    );
  }
}

export default HomePage;
