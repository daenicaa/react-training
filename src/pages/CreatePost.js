import React, {Component} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

import Breadcrumbs from '../components/Breadcrumbs';

class CreatePost extends Component {
  constructor(props) {
    super(props);
  }
  cancelEditTrigger = (event) => {
    $(".mask").addClass("active");
  }

  closeAlertModal = (event) => {
    $(".mask").removeClass("active");
  }
  render() {
    const link = 'Create New Post';
    const date = new Date();
    const today = date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDate();
		return (
      <main className="create-post">
        <Breadcrumbs link={link}/>
        <div class="mask" role="dialog"></div>
        <div class="modal" role="alert">
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
          <textarea class="form-control news-textarea" placeholder="Title"></textarea>
          <div className="create-post-image">
            <div className="button-browse-container">
              <div class="button button-dark">
                <span>UPLOAD IMAGE</span>
                <input type="file" class="button-browse" />
              </div>
            </div>
            <img src=""  alt=""/>
          </div>
          <textarea class="form-control news-textarea content" placeholder="Content"></textarea>
        </div>
      </main>
		);
  	}
}

export default CreatePost;
