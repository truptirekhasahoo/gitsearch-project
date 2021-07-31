import React, { Component } from "react";
import axios from "axios";

class GithubSearch extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedUser: null
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
            <button class="btn btn-primary ml-2" onClick={this.buttonSearchOnClick}>
              Search
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="container h-100">
              {this.state.users.map((userRow) => {
                return (
                  <div class="row my-2">
                    <div class="col-8 text-light">
                    <a href=''>
                    <img
                        src={userRow.avatar_url}
                        style={{ height: "100px", float: "left", margin: '5px' }}
                      />
                      <div class="text-light">{userRow.login}</div>
                    </a>
                      {/* <img
                        src={userRow.avatar_url}
                        style={{ height: "100px", float: "left", margin: '5px' }}
                      />
                      <div class="text-light">{userRow.login}</div>
                      <div class="text-light">{userRow.url}</div>
                      <div class="text-light">{userRow.repos_url}</div> */}
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
