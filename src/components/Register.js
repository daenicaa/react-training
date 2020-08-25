import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleOpenFormClick = this.handleOpenFormClick.bind(this);
    this.handleCloseFormClick = this.handleCloseFormClick.bind(this);
    this.showRegisterModal = this.showRegisterModal.bind(this);
    this.state = { isFormOpen: false };
  }

  handleRegisterClick = () => {
    this.props.handleRegisterClick();
    this.setState({ isOpenForm: false });
  }

  handleLogoutClick = () =>{
    this.props.handleLogoutClick();
    this.setState({ isOpenForm: false });
  }

  handleOpenFormClick() {
    this.setState({isOpenForm: true});
  }

  handleCloseFormClick() {
    this.setState({isOpenForm: false});
  }

  showRegisterModal() {
    this.setState({ showRegisterModal: true })
  }

  render() {
    const isOpenForm = this.state.isOpenForm;

    return (
      <div>

        {isOpenForm ? (
          <div className="form flex flex-center">
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
              <button onClick={this.handleRegisterClick} />
              <div className="form-registration u-align-center">
                Already have an account? <strong onCLick="this.showRegisterModal">REGISTER HERE</strong>
              </div>
            </div>
          </div>
        ) : (<span></span>)}
      </div>
    );
  }
}

function CloseForm(props) {
  return (
    <button onClick={props.onClick}>
      CLOSE
    </button>
  );
}

export default Register;
