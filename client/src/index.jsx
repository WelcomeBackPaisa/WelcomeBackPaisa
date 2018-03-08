import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddThread from './components/home-forum/AddThread.jsx';
import ThreadList from './components/home-forum/ThreadList.jsx';
import Comment from './components/individual-threads/Comment.jsx';
import AddReplyThread from './components/individual-threads/AddReplyThread.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      thread: [],
    currentThread:null
  }

  this.thread = this.thread.bind(this);
  this.addThread = this.addThread.bind(this);
  this.getThread = this.getThread.bind(this);
  this.handleThread=this.handleThread.bind(this);

}


  addThread(comment){
    $.ajax({

      method:'POST',
      url:'/paisa',
      contentType: 'application/json',
      data:JSON.stringify({
        comment:comment
      })
    }).done(()=>{
      this.getThread()
    })
  }
  getThread(){
    $.ajax({
      url:'/paisa',
      method:"GET",
      success: (results) =>{
        this.setState({thread:results})
      },
      error:(xhr,err) => {
        console.log("err", err);
      }

    })
  }




  handleThread(results){

{console.log(thread)}
  this.setState({currentThread:results})

  }
 componentDidMount(){
    this.getThread();


  }
 render() {
    return (
      <div>
        <BrowserRouter>
        <MuiThemeProvider>
      <AddThread addThread={this.addThread} />
      <ThreadList  thread={this.state.thread} currentThread={this.state.currentThread}  handleThread={this.handleThread}   />
      </MuiThemeProvider>
    </BrowserRouter>
  </div>
    )
  };

};
ReactDOM.render(<App />, document.getElementById('app'));
