/*Single Post will be a stateless presentational component
  it will be the template for displaying each post title, post's username
  This is also where we WOULD display the Upvotes/Likes, but we're not
  SinglePost will be clickable and be wrapped in a router Link to path: /post/:id
*/

import React from 'react';

const SinglePost = (props) => (
      <div>
        <div>
          <div>{`${props.post.post_subject}`}</div><br />
        </div>
      </div>
  )

export default SinglePost;
