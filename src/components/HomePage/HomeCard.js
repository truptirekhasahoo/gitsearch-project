import React, { Component } from "react";

class HomeCard extends Component {
  render() {
    return (
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <img
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-2.jpg"
              className="img-thumbnail"
            />
          </div>
          <div className="col-4 mt-1 align-self-center">
            <p className="text-white text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mt-1  align-self-center">
            <p className="text-white text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="col-4 float-lef8" >
            <img
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
              className="img-thumbnail"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4 float-lef8" >
            <img
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/madrid.jpg"
              className="img-thumbnail"
            />
          </div>
          <div className="col-3 mt-1  align-self-center">
            <p className="text-white text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCard;
