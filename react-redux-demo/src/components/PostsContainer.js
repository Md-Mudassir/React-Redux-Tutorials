import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";

function PostsContainer({ postData, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);
  return postData.loading ? (
    <h2>Loading</h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>Posts List</h2>
      <div>
        {postData &&
          postData.posts &&
          postData.posts.map((post) => <p>{post.title}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
