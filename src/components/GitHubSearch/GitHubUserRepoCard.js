import React, { Component } from "react";
import axios from "axios";

class GitHubUserRepoCard extends Component {
  constructor() {
    super();
    this.state = {
      languages: [],
    };
  }
  componentDidMount() {
    // axios
    //   .get(this.props.userRepo.languages_url)
    //   .then((response) => {
    //     console.log(response.data);
    //     let arrLanguages=[];
    //     for(let key in response.data) {
    //       if(response.data.hasOwnProperty(key)) {
    //         console.log(`${key} - ${response.data[key]}`);
    //         arrLanguages.push(`${key} - ${response.data[key]}`)
    //       }
    //     }
    //     this.setState({ languages: arrLanguages });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    let arrLanguages = [];
    arrLanguages.push(this.props.userRepo.language);
    this.setState({ languages: arrLanguages });
  }
  render() {
    return (
      <div class="card bg-dark w-50 float-start" key={this.props.index}>
        <div class="card-body">
          <a
            className="card-link text-truncate"
            href={this.props.userRepo.html_url}
          >
            {this.props.userRepo.name}
          </a>
          <p className="text-light card-text">
            {this.props.userRepo.description
              ? this.props.userRepo.description
              : "-"}
          </p>
          {this.props.userRepo.private ? (
            <span class="badge bg-danger rounded-pill">Private</span>
          ) : (
            <span class="badge bg-success rounded-pill">Public</span>
          )}
          <div>
            {this.state.languages.map((language, index) => {
              <span class="badge bg-info" key={index}>
                {language}
              </span>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default GitHubUserRepoCard;
