
import { SET_POST_DETAILS, API, ALL_POSTS,REQUEST_POSTS,RECEIVE_POSTS } from "./types";
 import axios from "axios";
 export function fetchPostsDetails() {

    return function(dispatch,getState) {
        dispatch(requestPosts());
       axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(({ data }) => {
          dispatch(receivePosts(data));
          console.log('current state:', getState());
       // dispatch(setPostDetails(data));
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