import React, { useRef, useState, useEffect } from "react";
import "./WritePost.css";
import Post from "./Post";
import { auth } from "../firebase";
import { db } from "../firebase";
import FlipMove from "react-flip-move";

function WritePost() {
  const messages = useRef();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const search = (e) => {
    var d = new Date();
    if (e.key === "Enter") {
      const msgValue = e.target.value;
      db.collection("posts").add({
        name: auth.currentUser.displayName,
        message: msgValue,
        photoUrl: auth.currentUser.photoURL,
        userID: auth.currentUser.uid,
        timeStamp: d.toLocaleString(),
      });
      e.target.value = "";
      e.target.blur();
    }
  };

  return (
    <>
      <div className="postContent">
        <div className="writePost">
          <div className="postInput">
            <i className="fas fa-edit"></i>
            <input
              className="postWriteInput"
              type="text"
              placeholder="Start a Post"
              ref={messages}
              onKeyPress={search}
            />
          </div>
          <div className="inputIcons">
            <div>
              <i className="fas fa-image"></i>
              <p>Photo</p>
            </div>
            <div>
              <i className="fas fa-video"></i>
              <p>Video</p>
            </div>
            <div>
              <i className="fas fa-calendar-alt"></i>
              <p>Event</p>
            </div>
            <div>
              <i className="fas fa-newspaper"></i>
              <p>Write Article</p>
            </div>
          </div>
        </div>
        <div className="dividerHr" />
        <div>
          <FlipMove>
            {posts.map(
              ({
                id,
                data: { name, designation, message, photoUrl, timeStamp },
              }) => (
                <Post
                  key={id}
                  name={name}
                  designation={designation}
                  timeStamp={timeStamp}
                  message={message}
                  photoUrl={photoUrl}
                />
              )
            )}
          </FlipMove>
        </div>
      </div>
    </>
  );
}

export default WritePost;
