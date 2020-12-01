import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleOpenFormClick = this.handleOpenFormClick.bind(this);
    this.handleCloseFormClick = this.handleCloseFormClick.bind(this);
    this.showRegisterModal = this.showRegisterModal.bind(this);
    this.state = { isFormOpen: false, showRegister: false, fade: false };
  }

  handleLoginClick = () => {
    this.props.handleLoginClick();
    this.setState({ isOpenForm: false });
  }

  handleLogoutClick = () =>{
    this.props.handleLogoutClick();
    this.setState({ isOpenForm: false });
    this.setState({ showRegister: false });
  }

  handleOpenFormClick() {
    this.setState({isOpenForm: true, fade: true});
  }

  handleCloseFormClick() {
    this.setState({isOpenForm: false, fade: false});
  }

  showRegisterModal() {
    let value = !this.state.showRegister
    this.setState({ showRegister: value })
  }

  render() {
    const isLoggedIn = this.props.state.isLoggedIn;
    const showRegister = this.state.showRegister;
    const isOpenForm = this.state.isOpenForm;
    const cssClasses = [ 'form flex flex-center', this.state.fade ? 'formOpened': 'formClosed' ];
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

          <div>
            {showRegister ? (
              <form className={cssClasses.join(' ')}>
                <div className="form-login">
                  <h2 className="form-header">REGISTER</h2>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <input className="form-control" type="password"/>
                  </div>
                  <RegisterButton onClick={this.handleLoginClick} />
                  <div className="form-registration u-align-center">
                    Already have an account? <a onClick={this.showRegisterModal}><strong>LOGIN HERE</strong></a>
                  </div>
                </div>
              </form>
            ) : (
              <form className={cssClasses.join(' ')}>
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
                    No account yet? <a onClick={this.showRegisterModal}><strong>REGISTER HERE</strong></a>
                  </div>
                </div>
              </form>
            )}
          </div>
         
      </div>
    );
  }
}

function LoginButton(props) {
  return (
    <button className="button button-dark" onClick={props.onClick}>
      LOGIN
    </button>
  );
}

function RegisterButton(props) {
  return (
    <button className="button button-dark" onClick={props.onClick}>
      REGISTER
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

export default Login;
