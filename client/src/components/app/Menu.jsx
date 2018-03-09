/*Dynamic MUI menu component that will contain links to Forum, About Me
  Will be mounted in App and be visible across all pages
*/
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};


    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  handleToggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  handleClose() {
    this.setState(prevState => ({
      open: false
    }));
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Menu"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Forum</MenuItem>
          <MenuItem onClick={this.handleClose}>About Us</MenuItem>
        </Drawer>
      </div>
    );
  }
}
