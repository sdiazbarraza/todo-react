import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { fetchPostsDetails } from "../actions";
import Post from './Post';
  class PostList extends Component {
  constructor(props) {
    super(props);
    
    
  }
  
  componentDidMount() {
    this.props.fetchPostsDetails();
    
  }
  componentDidUpdate() {
   
}
 _render(){
      
    
    if(!this.props.loading){
      var rows = this.props.datas.map(function(data){
        return <Post key={data.id}  tittle={data.tittle} body={data.body}/>
      });
      return rows;      
    }
  }

  render() {
  
    return (
      <div>
      <h3 align="center">List de Post</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
      <thead>
          <tr>
            
            <th>Tittle</th>
            <th>Body</th>
          </tr>
        </thead>    
        <tbody>
          { this._render() }
        </tbody>
      </table>
    </div>
    );
  }
}
const mapStateToProps = ({ datas = [], loading = false }) => ({
    datas,
    loading
  });
  export default connect(
    mapStateToProps,
    { fetchPostsDetails }
  )(PostList);