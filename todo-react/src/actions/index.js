
import {REQUEST_POSTS,RECEIVE_POSTS } from "./types";
 import axios from "axios";
 export function fetchPostsDetails() {
    return function(dispatch,getState) {
       dispatch(requestPosts());
       axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(({ data }) => {
          dispatch(receivePosts(data));
      });
    };
  }

  export const requestPosts = () => ({ 
    type: REQUEST_POSTS, 
    }); 
    export const receivePosts = data => ({ 
    type: RECEIVE_POSTS, 
    payload: data, 
    }); 