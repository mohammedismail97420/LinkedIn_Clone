import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import WritePost from "./WritePost";
import Extras from "./Extras";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Header borders="Home" />
      <div className="appBody">
        <Sidebar />
        <WritePost />
        <Extras />
      </div>
    </>
  );
}
