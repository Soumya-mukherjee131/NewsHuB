import React from 'react';

const NewsItem =(props)=> {

    let {title, description, btnText, imageUrl, newsUrl, author, date} = props;
    return (
      <div>
        <div className="card" style={{display: "flex"}}>
          <img src={!imageUrl?"https://placehold.co/600x400.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
              <a href={newsUrl} target="_top" className="btn btn-sm btn-dark">{btnText}</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
