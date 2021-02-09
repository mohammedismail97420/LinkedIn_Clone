import React from "react";
import "./Jobs.css";
import Header from "./Header";
function Jobs() {
  return (
    <>
      <Header borders="Jobs"></Header>
      <div className="jobsDiv">Currently there are no jobs available</div>
    </>
  );
}

export default Jobs;
