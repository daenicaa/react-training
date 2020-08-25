import React, {Component} from "react";
import { Link } from "react-router-dom";

import Article from '../components/Article';

class News extends Component {
	render() {
    const news = [
      {
        date:'2019.06.19',
        img:'/assets/img/article-image.png',
        title:'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト'
      },
      {
        date:'2019.06.19',
        img:'/assets/img/article-image.png',
        title:'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト'
      },
      {
        date:'2019.06.19',
        img:'/assets/img/article-image.png',
        title:'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト'
      },
      {
        date:'2019.06.19',
        img:'/assets/img/article-image.png',
        title:'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト'
      },
      {
        date:'2019.06.19',
        img:'/assets/img/article-image.png',
        title:'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト'
      },
      {
        date:'2019.06.19',
        img:'/assets/img/article-image.png',
        title:'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト'
      },
    ];
		const isLoggedIn = this.props.isLoggedIn;

		return (
      <section className="news main">
        <div className="flex flex-space-between flex-align-center">
          <h2 className="section-title">NEWS</h2>
					{isLoggedIn ? (
	          <Link className="button-underline" to="/create-post">Create New Post</Link>
	        ) : (<span></span>)}
        </div>
        <div className="news-container">
					{news.map((item,id) => (
						<Article item={item} id={id}/>
					))}
        </div>
        <div className="flex flex-center">
          <button className="button button-dark">LOAD MORE</button>
        </div>
      </section>
		);
	}
}

export default News;
