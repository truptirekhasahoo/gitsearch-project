import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GithubSearch from "../GitHubSearch/GithubSearch";
import Footer from '../Footer/Footer'

class Home extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Github" component={GithubSearch} />
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default Home;
