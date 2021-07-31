import React, { Component } from "react";
import axios from "axios";

class GithubSearch extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  buttonSearchOnClick = () => {
    let searchString = document.getElementById("textSearch").value;
    if (searchString === undefined || searchString === "") return;
    let strURL = "https://api.github.com/search/users?q=" + searchString;
    axios
      .get(strURL)
      .then((response) => {
        console.log(response.data.items);
        this.setState({ users: response.data.items });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div class="container h-100">
        <div class="row mt-2">
          <div class="col">
            <p className="p-2 bg-secondary text-white text-left">
              GitHub User Search
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" id="textSearch"></input>
            <button
              class="btn btn-primary ml-2"
              onClick={this.buttonSearchOnClick}
            >
              Search
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div className="card-columns">
              {this.state.users.map((userRow) => {
                return (
                  <div
                    class="card bg-light btn"
                    style={{ width: "15rem", float: "left", margin: "10px" }}
                  >
                    <img
                      src={userRow.avatar_url}
                      class="card-img-top"
                      style={{ padding: "10px" }}
                      alt={userRow.login}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{userRow.login}</h5>
                      <a href={"githubuser/" + userRow.login} class="stretched-link"></a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GithubSearch;
