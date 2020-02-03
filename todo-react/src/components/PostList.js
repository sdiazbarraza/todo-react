import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchPostsDetails } from "../actions";
import Post from './Post';

const mapStateToProps = ({ datas = [], loading = false }) => ({
  datas,
  loading
});

  const PostList= (props)=> {
    const { datas, loading } = props;
   useEffect(()=>{
    fetchPostsDetails();
   },[])

 
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
 
}

  export default connect(
    mapStateToProps,
    { fetchPostsDetails }
  )(PostList);