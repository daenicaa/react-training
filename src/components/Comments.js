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
          <ul>
            {comments.map(item => (
              <li className="comment">
                {item.comment}
                <time className="comment-date">{item.date}</time>
              </li>
            ))}
          </ul>
          <div className="comment-form">
            <textarea class="form-control" placeholder="Write Comment"></textarea>
            <button className="button button-dark">SUBMIT</button>
          </div>
        </div>
      </section>
		);
  }
}

export default Comments;
