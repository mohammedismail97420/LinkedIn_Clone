import React from "react";
import "./ProfilePic.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function ProfilePic() {
  return (
    <Link
      className="profileImageDiv"
      style={{ textDecoration: "none" }}
      to="/ProfileInfo"
    >
      <div title="My Profile">
        <img
          src={
            auth.currentUser.photoURL ||
            "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
          }
          alt="Profile"
        />
        <p>
          Me <i className="fas fa-sort-down iconSort"></i>
        </p>
      </div>
    </Link>
  );
}

export default ProfilePic;
