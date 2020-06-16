import React, {Component} from "react";
import ReactHtmlParser from 'react-html-parser';

import Breadcrumbs from '../components/Breadcrumbs';
import Comments from '../components/Comments';

class NewsPage extends Component {

  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.closeEditClick = this.closeEditClick.bind(this);
    this.saveEditClick = this.saveEditClick.bind(this);
    this.state = { isEditing: false};
  }

  handleEditClick() {
    this.setState({isEditing: true});
  }
  closeEditClick() {
    this.setState({isEditing: false});
  }
  saveEditClick() {
    this.setState({isEditing: false});
  }

  render() {
    const news = {
      date:'2019.06.19',
      img:'/assets/img/hero-img.png',
      title:'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト',
      content: '<p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p><p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>'
    };
    const isLoggedIn = this.props.isLoggedIn;
    const isEditing = this.state.isEditing;
		return (
      <main className="news news-page">
        <Breadcrumbs link={news.title}/>
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
          <time>{news.date}</time>
          {isEditing ? (
            <textarea className="form-control news-textarea" defaultValue={news.title}></textarea>
          ): (
            <h1 className="news-title">{news.title}</h1>
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
            <img src={news.img} alt={news.title} />
          </div>
          {isEditing ? (
            <textarea className="form-control news-textarea content" defaultValue={news.content}></textarea>
          ): (
            <div className="news-content">
              { ReactHtmlParser(news.content) }
            </div>
          )}
          <Comments />
        </div>
      </main>
		);
  	}
}

export default NewsPage;
