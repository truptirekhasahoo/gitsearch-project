import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GitHubUserRepoCard from './GitHubUserRepoCard';

class GitHubUserDetails extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: null,
      userRepos: [],
    };
  }
  componentDidMount() {
    const { username } = this.props.match.params;
    if (username === undefined || username === "") return;
    let strURL = "https://api.github.com/users/" + username;
    axios
      .get(strURL)
      .then((response) => {
        console.log(response.data);
        this.setState({ userDetails: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    strURL += "/repos";
    axios
      .get(strURL)
      .then((response) => {
        console.log(response.data);
        this.setState({ userRepos: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/Github" className="btn btn-primary">
              Back To GitHub Search
            </Link>
          </div>
        </div>
        {this.state.userDetails && (
          <div className="row">
            <div className="col-3 float-left">
              <img
                src={this.state.userDetails.avatar_url}
                className="card-img-top pt-2"
                alt={this.state.userDetails.login}
              />
              <div className="card-body">
                <h3 className="card-title text-light">
                  {this.state.userDetails.name
                    ? this.state.userDetails.name
                    : this.state.userDetails.login}
                </h3>
                {this.state.userDetails.location && (
                  <label className="text-light">
                    Location: {this.state.userDetails.location}
                  </label>
                )}
              </div>
            </div>
            <div className="col">
              <div className="card-columns">
                {this.state.userRepos.map((userRepo, index) => {
                  return (
                    <GitHubUserRepoCard userRepo={userRepo} index={index} />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GitHubUserDetails;
