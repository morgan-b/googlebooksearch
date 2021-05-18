import React from "react";

export function ResCard(props) {
  return (
   
        <div className="row">
          <div className="col-md-2">
            <img
              alt={props.title}
              className="card-img"
              src={props.imageLink}
            ></img>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <h5 className="card-title">{props.author}</h5>
              <p className="card-text">{props.description}</p>
              <a
              className="btn btn-light homebtns"
              href={props.link}
              target="_blank"
              rel="noreferrer"
            >
              Buy Here
            </a>
            </div>
          </div>
          
            
        
        </div>
   
  );
}

export function SaveBtn(props) {
  return (
    <button className="btn btn-light" onClick={props.onClick}>
      Save Book
    </button>
  );
}
