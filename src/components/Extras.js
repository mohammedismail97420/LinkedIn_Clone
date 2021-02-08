import React from "react";
import "./Extras.css";

function Extras() {
  return (
    <div className="extras">
      <div className="extrasTop">
        <span className="extrasHeading">News</span>
        <span className="extrasInfoIcon">
          <i className="fas fa-info-circle"></i>
        </span>
      </div>

      <div className="extraPosts">
        <div className="postsTopPart">
          <div className="bluIconDiv">
            <div className="blueIcon"></div>{" "}
          </div>
          <p>The tech skills in demand</p>
        </div>
        <span className="extrasDate">5d ago • 12,170 readers</span>
      </div>

      <div className="extraPosts">
        <div className="postsTopPart">
          <div className="bluIconDiv">
            <div className="blueIcon"></div>
          </div>
          <p>Bezos step down as Amazon CEO</p>{" "}
        </div>
        <span className="extrasDate">11h ago • 2,170 readers</span>
      </div>

      <div className="extraPosts">
        <div className="postsTopPart">
          <div className="bluIconDiv">
            <div className="blueIcon"></div>
          </div>
          <p>Will the edtech boom continue?</p>
        </div>
        <span className="extrasDate">5d ago • 2,582 readers</span>
      </div>

      <div className="extraPosts">
        <div className="postsTopPart">
          <div className="bluIconDiv">
            <div className="blueIcon"></div>
          </div>
          <p>Is the job market improving?</p>
        </div>
        <span className="extrasDate">4d ago • 3,170 readers</span>
      </div>

      <div className="extraPosts">
        <div className="postsTopPart">
          <div className="bluIconDiv">
            <div className="blueIcon"></div>
          </div>
          <p>How tourism is changing</p>
        </div>
        <span className="extrasDate">7h ago • 1,050 readers</span>
      </div>

      <div className="extraPosts">
        <div className="postsTopPart">
          <div className="bluIconDiv">
            <div className="blueIcon"></div>
          </div>
          <p>New to LinkedIn? Hello there</p>
        </div>
        <span className="extrasDate">5d ago • 12,170 readers</span>
      </div>
    </div>
  );
}

export default Extras;
