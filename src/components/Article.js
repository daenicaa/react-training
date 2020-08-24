import React, { Component } from "react";
import { Link } from "react-router-dom";

class Article extends Component {
	render() {
		const {img, title, date} = this.props.item;
		const id = this.props.id;
		return (
      <article className="article-item" key={`news-${id}`}>
        <Link to={`/news/${title}`}>
          <div className="article-image">
            <img src={img} alt={title} />
          </div>
          <div className="article-content">
            <time className="article-date">{date}</time>
            <h3 className="article-title">{title}</h3>
          </div>
        </Link>
      </article>
		);
	}
}

export default Article;
