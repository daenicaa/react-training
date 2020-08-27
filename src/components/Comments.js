import React, { Component } from "react";
import moment from 'moment';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {
      comments: [
        {
          date:'3 months ago',
          comment: 'ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。'
        },
        {
          date:'3 months ago',
          comment: 'ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。'
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let date_create = moment().format("DD-MM-YYYY");
    let newValue = { date:date_create, comment: this.state.value }
    this.setState({
      comments: this.state.comments.concat(newValue)
    })
    event.preventDefault();
  }

  render() {
		return (
      <section className="comments">
        <div className="l-container">
          <h2 className="comments-title">COMMENTS</h2>
            {this.state.comments.map((item, id) => (
              <div className="comment" key={`comment-${id}`}>
                {item.comment}
                <time className="comment-date">{item.date}</time>
              </div>
            ))}
          <div className="comment-form">
            <form>
              <textarea className="form-control" placeholder="Write Comment" value={this.state.value} onChange={this.handleChange} ></textarea>
              <button className="button button-dark" onClick={this.handleSubmit}>SUBMIT</button>
            </form>
          </div>
        </div>
      </section>
		);
  }
}

export default Comments;
