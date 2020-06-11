import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleOpenFormClick = this.handleOpenFormClick.bind(this);
    this.handleCloseFormClick = this.handleCloseFormClick.bind(this);
    this.state = { isLoggedIn: false, isFormOpen: false };
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true, isOpenForm: false});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false, isOpenForm: false});
  }

  handleOpenFormClick() {
    this.setState({isOpenForm: true});
  }

  handleCloseFormClick() {
    this.setState({isOpenForm: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const isOpenForm = this.state.isOpenForm;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else if (isOpenForm){
      button = <CloseForm onClick={this.handleCloseFormClick} />;
    } else {
      button = <OpenForm onClick={this.handleOpenFormClick} />;
    }

    return (
      <div>
        {button}
        {isOpenForm ? (
          <div className="form flex flex-center">
            <div className="form-login">
              <h2 className="form-header">LOGIN</h2>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-control" type="email"/>
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input className="form-control" type="password"/>
              </div>
              <LoginButton onClick={this.handleLoginClick} />
              <div className="form-registration u-align-center">
                No account yet? <strong>REGISTER HERE</strong>
              </div>
            </div>
          </div>
        ) : (<span></span>)}
      </div>
    );
  }
}

function LoginForm(props) {
  return (
    <button onClick={props.onClick}>
      LOGIN
    </button>
  )
}
//
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

function LoginButton(props) {
  return (
    <button className="button button-dark" onClick={props.onClick}>
      LOGIN
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      LOGOUT
    </button>
  );
}

function OpenForm(props) {
  return (
    <button onClick={props.onClick}>
      LOGIN
    </button>
  );
}
function CloseForm(props) {
  return (
    <button onClick={props.onClick}>
      CLOSE
    </button>
  );
}

export default LoginControl;
