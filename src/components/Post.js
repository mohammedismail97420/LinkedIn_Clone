import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const Post = forwardRef((data, ref) => {
  return (
    <>
      <div ref={ref} className="post">
        <p className="postDots">˙˙˙</p>
        <div className="postTop">
          <img
            className="postImage"
            src={
              data.photoUrl ||
              "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            }
            alt="Profile"
          />
          <div className="postTopText">
            <p className="postUserName">{data.name}</p>
            <p className="postUserDesg">{data.designation}</p>
            <p className="postDate">{data.timeStamp}</p>
          </div>
        </div>
        <div className="postMessage">{data.message}</div>
        <div className="dividerHr" />
        <div className="postBottom">
          <p className="postBottomLike">
            <ThumbUpOutlinedIcon />
            &nbsp;Like
          </p>
          <p className="postBottomComment">
            <CommentOutlinedIcon />
            &nbsp;Comment
          </p>
          <p className="postBottomShare">
            <ShareOutlinedIcon />
            &nbsp;Share
          </p>
          <p className="postBottomSend">
            <SendRoundedIcon />
            &nbsp;Send
          </p>
        </div>
      </div>
    </>
  );
});

export default Post;
