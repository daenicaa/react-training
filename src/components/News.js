import React, {Component} from "react";
import { Link } from "react-router-dom";

import Article from '../components/Article';

class News extends Component {
	constructor(props){
		super(props);
		this.loadMore = this.loadMore.bind(this);
		this.state = {
			news: [
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
	    ],
			articlesToShow: 6
		}
	}

	loadMore() {
    this.setState((prev) => {
      return { articlesToShow: prev.articlesToShow + 6 };
    });
  }

	render() {

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

					{this.state.news.slice(0,this.state.articlesToShow).map((item,id) => (
						<Article key={`article-${id}`} item={item} id={id}/>
					))}
        </div>
				{this.state.news.length >= this.state.articlesToShow ? (
	        <div className="flex flex-center">
	          <button className="button button-dark" onClick={this.loadMore}>LOAD MORE</button>
	        </div>
				): (<span></span>)}
      </section>
		);
	}
}

export default News;
