import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GithubSearch from "../GitHubSearch/GithubSearch";
import GithubUserDetails from "../GitHubSearch/GitHubUserDetails";
import Footer from "../Footer/Footer";
import LoginPage from './LoginPage'

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar setToken={this.props.setToken} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Github" component={GithubSearch} />
            <Route exact path="/githubuser/:username" component={GithubUserDetails} />
            <Route exact path="/Logout" component={LoginPage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default Home;
