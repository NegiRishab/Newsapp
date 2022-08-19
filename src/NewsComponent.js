import React, { Component } from "react";

export default class NewsComponent extends Component {
  render() {
    const { title, descreption, imageurl, newsurl, author, date ,name} = this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1}}>
           {name}
          </span>
          <img
            src={
              !imageurl
                ? "https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/15/full/1636950552-2573.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{descreption}</p>
            <p className="card-text">
              <small className="text-muted">
                {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
