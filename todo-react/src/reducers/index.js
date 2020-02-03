import {
    REQUEST_POSTS,
    RECEIVE_POSTS
   
  } from "../actions/types";
  const initialState = {
    datas: [],
    loading: true,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case RECEIVE_POSTS:
        return { ...state,
            datas: action.payload,
            loading:false
         };
      case REQUEST_POSTS:
            return { ...state, loading: true };
      default:
        return state;
    }
  }