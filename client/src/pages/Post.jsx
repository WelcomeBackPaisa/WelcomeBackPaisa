/*Post is the page for an individual Post
  It will be a stateful Container component
  Post will render: Comment, ReplyThread, AddReply
  Post will contain GET/POST logic for creating a new Post, fetching a single Post,
  fetching all the replies to the post, and POSTing a new reply
  Post will contain handleSubmit logic for AddReply
  Post will save GET data in state and pass down post and replies down as props
*/

import React from 'react';

import HeaderBar from "../components/app/HeaderBar.jsx";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  this.addPost = this.addPost.bind(this);
  this.getPost = this.getPost.bind(this);
  this.handlePost=this.handlePost.bind(this);
}

  componentDidMount(){
    this.getPost();
  }

  addPost(){
    $.ajax({
      method:'POST',
      url:'/',
      contentType: 'application/json',
      data:JSON.stringify({
        comment:comment
      })
    }).done(()=>{
      this.getPost()
    })
  }

  getPost(){
    $.ajax({
      url:'/paisa',
      method:"GET",
      success: (results) =>{
        this.setState({post:results})
      },
      error:(xhr,err) => {
        console.log("err", err);
      }
    })
  }

  handlePost(results){
  this.setState({
    currentPost:results
    })
  }
  render() {
    return (
      <div>
        <HeaderBar />
      </div>
      )
    }
}
