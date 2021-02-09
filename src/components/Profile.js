import React, { forwardRef } from "react";
import "./Profile.css";

const Profile = forwardRef((data, ref) => {
  return (
    <>
      <div ref={ref} className="Profile">
        <div className="profileImg">
          <img
            className="postImage"
            src={
              data.photoURL ||
              "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            }
            alt="Profile"
          />
        </div>
        <div className="profileText">
          <div>{data.name}</div>
          <div>{data.designation}</div>
        </div>
      </div>
    </>
  );
});

export default Profile;
