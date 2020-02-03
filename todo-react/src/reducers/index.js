import {
    SET_POST_DETAILS,
    API_START,
    API_END,
    FETCH_POST_DETAILS,
    REQUEST_POSTS,
    RECEIVE_POSTS
   
  } from "../actions/types";
  const initialState = {
    datas: [],
    loading: true,
  };
  
  export default function(state = initialState, action) {
    console.log("action type => ", action.type);
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