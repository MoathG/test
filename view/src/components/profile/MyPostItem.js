import React, { Component } from "react";
import mongoose from "mongoose";
import moment from "moment";
import { Link } from 'react-router-dom'

export class MyPostItem extends Component {
<<<<<<< HEAD
  creationTime() {
    const { _id } = this.props;
    const isoDate = mongoose.Types.ObjectId(_id).getTimestamp();
    const mom = new moment(isoDate);
    const now = new moment();
    const duration = moment.duration(now.diff(mom));

    return duration.humanize();
  }

  render() {
    const { deletePost } = this.props;
    const { _id, title, text, code, user } = this.props.post
=======
  render() {
    const { _id, image, title, text, code, deletePost } = this.props;

    // const isoDate = mongoose.Types.ObjectId(_id).getTimestamp()
    // const date = new Date(isoDate);
    // console.log (date)

    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
>>>>>>> clean code

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="post_item">
                <div className="User_info">
                  <div className="user_img">
<<<<<<< HEAD
                    <img src={user.image} alt="profile" />
=======
                    <img src={image} alt="profile" />
>>>>>>> clean code
                  </div>
                  <div className="user_name">{user.name}</div>
                  <span className="userinfo_date float-right">
                    {this.creationTime()}
                  </span>
                  <span>
                    <button
                      type="button"
                      className="btn btn-outline-danger rounded-circle"
                      onClick={deletePost.bind(this, _id)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
                <div className="post">
                  <h4>{title}</h4>
                  <h6>{text}</h6>
                  <br />
                  <pre>{code}</pre>
                </div>
                <div className="pos_anser_single">
                  <p>the Answers</p>
<<<<<<< HEAD
                  <Link
                    className="text-light"
                    to={{ pathname: `/post/${_id}`, state: this.props.post }}
                  >
                    <button className="btn btn-info">Answers</button>
                  </Link>
=======
                  <button className="btn btn-info">Answer</button>
>>>>>>> clean code
                </div>
                <div></div>
                <div className="commints">
                  <div className="commints_answers">10 Comments</div>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-danger rounded-circle"
                  onClick={deletePost.bind(this, _id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPostItem;
