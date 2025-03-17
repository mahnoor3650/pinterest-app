import React from "react";
import "./post.css";
import Image from "../../components/image/Image";
import { Link } from "react-router";
import PostIntercations from "../../components/postInteractions/PostIntercations";
import Comments from "../../components/comments/Comments";
const Post = () => {
  return (
    <div className="psotPage">
      <div className="postContainer">
        <div className="postImg">
          <img src="/pins/pin1.jpeg" alt="" width={736} />
          <Image path="/pins/pin1.jpeg" alt="pin1" height={736} width={736} />
        </div>
        <div className="postDetails">
          <PostIntercations />
          <Link to="/john" className="postUser">
            <Image path="/general/noAvatar.png" />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Post;
