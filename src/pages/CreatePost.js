import React, {Component} from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from '../components/Breadcrumbs';

class CreatePost extends Component {

  render() {
    const link = 'Create New Post';
    const date = new Date();
    const today = date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDate();
		return (
      <main className="create-post">
        <Breadcrumbs link={link}/>
        <div className="l-container flex flex-end">
          <button className="button-underline">Save Post</button>
          <Link to="/"><button className="button-underline">Cancel</button></Link>

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
