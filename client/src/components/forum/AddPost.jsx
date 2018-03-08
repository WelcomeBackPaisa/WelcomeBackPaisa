/*AddPost will be a stateless presentational component
  AddPost will be clickable and should redirect to Create New Post page
  But for right now, it should only be a button icon
*/

import React from 'react';

class AddPost extends React.Component{
 constructor(props){
   super(props);
   this.state = {
    comment:''
  }
  this.add = this.add.bind(this);
  this.updateComment = this.updateComment.bind(this);
  this.updateUserName = this.updateUserName.bind(this);

 }
 updateComment(e){
   this.setState({
     comment:e.target.value
   })
 }

 updateUserName(e){
   this.setState({
     userName:e.target.value
   })
 }
 add(){
   this.props.addThread(this.state.comment)
   this.setState({
     comment:''
   })
 }

 render() {
    return (
      <div>
          <div className="startT">
          <h2>START A THREAD</h2>
          </div>
        </div>
    );
  }
}
export default AddPost;
