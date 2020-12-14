import React, { Component } from 'react'
import Img from './Img'
import {connect} from 'react-redux'
import { NavLink} from 'react-router-dom'

 class Home extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         posts :[]
    //     }
    // }

    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //       .then((response) => response.json())
    //       .then((json) => this.setState({
    //           posts : json.slice(0,10)
    //       }));
    // }

    render() {
        const {posts} = this.props;      

       let _posts = posts.map(p=>{
            return (
              <div className="row" key={p.id}>
                <div className="card blue darken-1">
                  <div className="card-content white-text">
                    <b>                     
                     <NavLink className="yellow-text" to={"/" + p.id}> <span className="card-title">{p.title}</span></NavLink>
                    </b>
                    <p>{p.body}</p>
                  </div>
                </div>
              </div>
            );
        });     

        return (
          <div className="container">
            {_posts}
          </div>
        );
    }
}

const mapStateToprops = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToprops)(Home)