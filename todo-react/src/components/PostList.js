import React, { useEffect,useState  } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { fetchPostsDetails } from "../actions";
import Post from './Post';
/*
const mapStateToProps = ({ datas = [], loading = false }) => ({
  datas,
  loading
});*/
 export const PostList= ()=> {
    
    
    const { datas, loading } = useSelector(state => ({
      datas: state.datas,
      loading: state.loading,
    }));
    const dispatch = useDispatch();
   
   useEffect(()=>{
      dispatch(fetchPostsDetails());
    },[]);

 
   return (
    <div className ={"PostList"}>
    <h3 align="center">List de Post</h3>
    <table className="table table-striped" style={{ marginTop: 20 }}>
    <thead>
        <tr>
          <th>Tittle</th>
          <th>Body</th>
        </tr>
      </thead>    
      <tbody>
        { !loading && 
            datas.map(({ title, body }, index) => <Post key={index} title={title} body={body} />)
          }
      </tbody>
    </table>
  </div>
  );
 
};

