import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Post extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         post : null
    //     }
    // }

    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.post_id )
    //       .then((response) => response.json())
    //       .then((json) => this.setState({
    //           post : json
    //       }));
    // }
  
    deletePost(){
        this.props.deletePost(this.props.match.params.post_id);
       // console.log(this.props);
    }

    render() {
        if(this.props.post == null){
            return (
                <div className="red-text">
                    Not Found.
                </div>
            )
        }
        let {post} = this.props;
        let p = post;
        return (
            <div className="container">
            <h1> the king is  {this.props.name}</h1>
             <div className="row" key={p.id}>
                <div className="card blue darken-1">
                  <div className="card-content white-text">
                    <b>                     
                      <span className="card-title">{p.title}</span>
                    </b>
                    <p>{p.body}</p>
                  </div>
                </div>
              </div>

              <button className="btn red centre" onClick= {()=> this.deletePost()}> Delete this post</button>
        
                
            </div>
        )
    }
}

const mapStateToprops = (state, ownProps) => {
  let p = state.posts.filter((p) => {
    return p.id == ownProps.match.params.post_id;
  });

  return {
    post: p[0]    
  };
};

const mapActionToProp = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

const mapRandomToProp = () => {
    return {
        name : "Umar Shareef"
    }
}

export default connect(mapStateToprops , mapActionToProp)(Post)
