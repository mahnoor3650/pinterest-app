import React, { useState } from "react";
import "./comments.css";
import Image from "../image/Image";
import EmojiPicker from "emoji-picker-react";
const Comments = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 Comments</span>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input
          type="text"
          className="commentInput"
          placeholder="Add a comment"
        />
        <div className="emoji">
          <div onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>😀</div>
         {openEmojiPicker && (
          <div className="emojiPicker">
            <EmojiPicker />
          </div>
         )}
        </div>
        {/* <button className="commentButton">Send</button> */}
      </form>
    </div>
  );
};

export default Comments;
