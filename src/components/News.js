import React, {Component} from "react";

class ListComponent extends Component {
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

		return (
      <section className="news">
        <div className="flex flex-space-between">
          <h2 className="section-title">NEWS</h2>
          <button>Create New Post</button>
        </div>
        <div className="news-container">
          {news.map(item => (
            <article className="news-item" key={item.id}>
              <div className="news-image">
                <img src={item.img} alt={item.img} />
              </div>
              <div className="news-content">
                <time className="news-date">{item.date}</time>
                <h3 className="news-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="flex flex-center">
          <button className="button button-dark">LOAD MORE</button>
        </div>
      </section>
		);
  	}
}

export default ListComponent;
