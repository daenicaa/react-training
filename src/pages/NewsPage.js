import React, {Component} from "react";
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

import Breadcrumbs from '../components/Breadcrumbs';
import Comments from '../components/Comments';

class NewsPage extends Component {

  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.closeEditClick = this.closeEditClick.bind(this);
    this.saveEditClick = this.saveEditClick.bind(this);
    this.state = { isEditing: false};
    this.state = {
      date:'2019.06.19',
      img:'/assets/img/hero-img.png',
      title:'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト',
      content: '<p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p><p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>',
      newimg:'',
      newtitle: '',
      newcontent: ''
    };
  }
  componentDidMount(){
     this.setState({ newimg: this.state.img });
    this.setState({ newtitle: this.state.title });
    this.setState({ newcontent: this.state.content });
    console.log(this.state.img);
  }
  handleEditClick() {
    this.setState({isEditing: true});
  }
  closeEditClick() {
    this.setState({isEditing: false});
  }

  handleTitleChange = (event) => {
    this.setState({ newtitle: event.target.value });
  }

  handleContentChange = (event) => {
    this.setState({ newcontent: event.target.value });
  }

  saveEditClick() {
    this.setState({isEditing: false});
    this.setState({ title: this.state.newtitle });
    this.setState({ img: this.state.newimg });
    this.setState({ content: this.state.newcontent });
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    const isEditing = this.state.isEditing;
    let title = this.state.title;
		return (
      <main className="news news-page">
        <Breadcrumbs link={title}/>
        <div className="l-container flex flex-end">
          {isLoggedIn
            ? [
              isEditing
                ? <div className="flex flex-end">
                    <button className="button-underline" onClick={this.saveEditClick}>Save Post</button>
                    <button className="button-underline" onClick={this.closeEditClick}>Cancel</button>
                  </div>
                : <button className="button-underline" onClick={this.handleEditClick}>Edit Post</button>
            ]
            : <span className="button-underline"></span>
          }
        </div>
        <div className="l-container">
          <time>{this.state.date}</time>
          {isEditing ? (
            <textarea className="form-control news-textarea" value={this.state.newtitle} onChange={this.handleTitleChange} ></textarea>
          ): (
            <h1 className="news-title">{this.state.title}</h1>
          )}
          <div className="news-image">
            {isEditing ? (
              <div className="button-browse-container">
                <div className="button button-dark">
                  <span>UPLOAD IMAGE</span>
                  <input type="file" className="button-browse" />
                </div>
              </div>
            ): (
              <span></span>
            )}
            <img src={this.state.img} alt={this.state.title} />
          </div>
          {isEditing ? (
            <textarea className="form-control news-textarea content" onChange={this.handleContentChange} value={this.state.newcontent}></textarea>
          ): (
            <div className="news-content">
              { ReactHtmlParser(this.state.content) }
            </div>
          )}
          <Comments />
        </div>
      </main>
		);
  	}
}

export default NewsPage;
