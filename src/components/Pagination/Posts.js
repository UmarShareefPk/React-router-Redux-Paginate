import React, { Component } from 'react'
import OnePost from './OnePost';
import Pages from './Pages'

export default class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            Posts : [],
            PostsPerPage : 3,
            TotalPages:0,
            CurrentPage : 1,
        }
        this.setPageNumber = this.setPageNumber.bind(this);
    }

    setPageNumber(pagenum){      

        let end =  pagenum * this.state.PostsPerPage;  
         let start = end - this.state.PostsPerPage;      

        this.getData(start ,end).then(response => {
            const {data , total} = response;          
            this.setState(
                {
                    CurrentPage : pagenum,           
                    Posts : data,
                    TotalPages : total,                    
                }
             );
        });   
    }

    componentDidMount(){
        this.setPageNumber(1);     
    }

    getData(start, end){
       return fetch("https://jsonplaceholder.typicode.com/posts")
             .then((resp) => resp.json())
             .then(data=>{
                            return   {
                            data : data.slice(start,end),
                            total : data.length
                            }            
        });
    }

    render() {
        console.log("Render");
        
        let p = this.state.Posts.map(post=>{
            return (
                <OnePost post={post} key={post.id}/>
            )
        });
        return (
            <div className="center">
                <h2>Posts</h2>
                {   p    }
                <Pages TotalPages={this.state.TotalPages} PostsPerPage={this.state.PostsPerPage} setPageNumber={this.setPageNumber}  />
            </div>
        )
    }
}
