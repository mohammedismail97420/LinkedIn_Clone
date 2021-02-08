import React, { useEffect } from "react";
import "./Sidebar.css";
import banner from "../assets/banner.png";
import { auth } from "../firebase";
import { db } from "../firebase";

function Sidebar() {
  useEffect(() => {
    let abdc = "NULL";
    db.collection("profiles")
      .doc(auth.currentUser.uid)
      .get("designation")
      .then((response) => {
        abdc = response.data().designation;
        document.getElementById("designation").innerHTML = abdc;
      });
  });
  return (
    <div className="sidebar">
      <div className="sidebarProfileCard">
        <div className="cardTop">
          <img className="sidebarBanner" src={banner} alt="Banner" />
          <img
            className="sidebarProfilePic"
            src={
              auth.currentUser.photoURL ||
              "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            }
            alt="Profile"
          />
        </div>
        <div className="cardMiddle">
          <h5 className="sidebarName">{auth.currentUser.displayName}</h5>
          <p className="sidebarDesignation" id="designation"></p>
        </div>
      </div>
      <div className="recentItemsCard">
        <div className="recentHeading">Recent </div>
        <p>india</p>
        <p>corona</p>
        <p>USA</p>
        <p>jeffbezos</p>
        <p>actor</p>
        <p>amazon</p>
      </div>
    </div>
  );
}

export default Sidebar;
