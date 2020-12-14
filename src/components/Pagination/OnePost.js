import React from 'react'

export default function OnePost({post}) {
    
    return (

        <div className="row" key={post.id}>
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <b>
                <span className="card-title">{post.title}</span>
              </b>
              <p>{post.body}</p>
            </div>
          </div>
        </div>      
      
    );
}
