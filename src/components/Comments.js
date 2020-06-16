import React, { Component } from "react";

class Comments extends Component {
  render() {
    const comments = [
      {
        date:'3 months ago',
        comment: 'ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。'
      },
      {
        date:'3 months ago',
        comment: 'ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。'
      }
    ];
		return (
      <section className="comments">
        <div className="l-container">
          <h2 className="comments-title">COMMENTS</h2>
            {comments.map(item => (
              <div className="comment" key={item.id}>
                {item.comment}
                <time className="comment-date">{item.date}</time>
              </div>
            ))}
          <div className="comment-form">
            <textarea className="form-control" placeholder="Write Comment"></textarea>
            <button className="button button-dark">SUBMIT</button>
          </div>
        </div>
      </section>
		);
  }
}

export default Comments;
