import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {BrowserRouter, Route} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';

import AddThread from './components/home-forum/AddThread.jsx';
import ThreadList from './components/home-forum/ThreadList.jsx';
import Comment from './components/individual-threads/Comment.jsx';
import AddReplyThread from './components/individual-threads/AddReplyThread.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      threads: [
        { id: 54,
          title: 'help I need somebody',
          body: 'really need somebody'},
        { id: 55,
          title: 'CDMX is great',
         body: 'Best city ever'}
      ],
    currentThread: null
  }
  this.addThread = this.addThread.bind(this);
  this.getThread = this.getThread.bind(this);
  this.handleThread=this.handleThread.bind(this);
}

  componentDidMount(){
    this.getThread();
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
  this.setState({
    currentThread:results
    })
  }

 render() {
    return (
      <div>
        <BrowserRouter>
          <MuiThemeProvider>
            <AddThread addThread={this.addThread} />
            <ThreadList threads={this.state.threads} currentThread={this.state.currentThread} handleThread={this.handleThread} />
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
