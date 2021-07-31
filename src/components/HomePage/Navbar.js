import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid" >
        <div className="row">
          <nav className="navbar navbar-dark " style={{"background-color": "#5C5D5E"}}>
            <a href="" className="navbar-brand"></a> 

            <ul className="nav">
              <li className="nav-item"><Link to="/" className="nav-link text-white" >Home</Link></li>
              <li className="nav-item"><Link to="/Github" className="nav-link text-white">GitHubSearch</Link></li>
              <li className="nav-item"><Link to="/Help" className="nav-link text-white">Help</Link> </li>
             <li className="nav-item"><Link to="/Logout" className="nav-link text-white">Logout</Link> </li>
              
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
