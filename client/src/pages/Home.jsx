import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";

import HeaderBar from "../components/home-forum/HeaderBar.jsx";
import ThreadList from "../components/home-forum/ThreadList.jsx"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [
        {title: 'help I need somebody',
          body: 'really need somebody'},
        {title: 'CDMX is great',
         body: 'Best city ever'}
      ]
    };
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <ThreadList threads={this.state.threads} />
      </div>
    );
  }
}
