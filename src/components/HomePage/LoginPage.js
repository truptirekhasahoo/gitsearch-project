import React from "react";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.credentials = { name: "Gitsearch", password: "123" };
  }

  loginClick = () => {
    let enteredUserName = document.getElementById("textUserName").value;
    let enteredPassword = document.getElementById("textPassword").value;
    if (
      enteredUserName === this.credentials.name &&
      enteredPassword === this.credentials.password
    ) {
      this.props.setToken("login");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h3>Login Form</h3>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="EnterName"
                  id="textUserName"
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="textPassword"
                />
              </div>
              <div className="form-group text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  value="Login"
                  onClick={this.loginClick}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;
