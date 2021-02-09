import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./MyNetwork.css";
import { db } from "../firebase";
import { auth } from "../firebase";
import FlipMove from "react-flip-move";
import Profile from "./Profile";

function MyNetwork() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    db.collection("profiles").onSnapshot((snapshot) =>
      setProfiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <>
      <Header borders="MyNetwork" />
      <div className="MyNetworkDiv">
        <h1>My Network</h1>
        <div className="profilesDiv">
          <FlipMove>
            {profiles.map(({ id, data: { name, designation, photoURL } }) => {
              if (name !== auth.currentUser.displayName) {
                return (
                  <Profile
                    key={id}
                    name={name}
                    designation={designation}
                    photoURL={photoURL}
                  />
                );
              }
            })}
          </FlipMove>
        </div>
      </div>
    </>
  );
}

export default MyNetwork;
