import React from 'react';
const Post = (props) => {
    
    
    return (
      <tr>
        <td><h1>{props.title}</h1></td>
        <td><p>{props.body}</p></td>
      </tr>
    );
  };
  
  export default Post;