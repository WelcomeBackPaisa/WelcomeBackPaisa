import React from 'react';
import SinglePost from './SinglePost.jsx';

/*Posts component will contain logic for rendering user posts as a list
*/
const Posts = (props) => (
  <div>
    {props.posts.map(post => <SinglePost post={post} key={post.id} /> )}
  </div>
);
export default Posts;
