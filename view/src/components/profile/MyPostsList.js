import React, { Component } from "react";
import MyPostItem from "./MyPostItem";

export class PostsList extends Component {
  render() {
    const { myPosts, deletePost } = this.props;
    return (
      <div>
        {myPosts.map(post => (
<<<<<<< HEAD
          <MyPostItem key={post._id} post={post} deletePost={deletePost} />
=======
          <MyPostItem key={post._id} {...post} deletePost={deletePost} />
>>>>>>> clean code
        ))}
      </div>
    );
  }
}

export default PostsList;
