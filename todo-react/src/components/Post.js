import React from 'react';
const Post = ({ title = "", body = "" }) => {
    return (
      <tr>
        <td><h1>{title}</h1></td>
        <td><p>{body}</p></td>
      </tr>
    );
  };
  
  export default Post;