import React, {Component} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

import Breadcrumbs from '../components/Breadcrumbs';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  cancelEditTrigger = (event) => {
    $(".mask").addClass("active");
  }

  closeAlertModal = (event) => {
    $(".mask").removeClass("active");
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
    const link = 'Create New Post';
    const date = new Date();
    const today = date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDate();
		return (
      <main className="create-post">
        <Breadcrumbs link={link}/>
        <div className="mask" role="dialog"></div>
        <div className="modal" role="alert">
          <h2>Are you sure you want to Cancel?</h2>
          <div className="row flex-space-between">
            <Link className="col-lg-6" to="/"><button className="button button-dark">Yes</button></Link>
            <button className="col-lg-5 button" onClick={this.closeAlertModal}>No</button>
          </div>
        </div>
        <div className="l-container flex flex-end">
          <button className="button-underline">Save Post</button>
          <button className="button-underline" onClick={this.cancelEditTrigger}>Cancel</button>
        </div>
        <div className="l-container">
          <time>{today}</time>
          <textarea className="form-control news-textarea" placeholder="Title"></textarea>
          <div className="create-post-image">
            <div className="button-browse-container">
              <div className="button button-dark">
                <span>UPLOAD IMAGE</span>
                <input type="file" className="button-browse" onChange={this.handleChange}/>
              </div>
            </div>
            <img src={this.state.file}  alt=""/>
          </div>
          <textarea className="form-control news-textarea content" placeholder="Content"></textarea>
        </div>
      </main>
		);
  	}
}

export default CreatePost;
