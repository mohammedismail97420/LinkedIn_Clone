import React from "react";
import "./HeaderOption.css";

function HeaderOption({ title, icon, border }) {
  return (
    <div className={"headerOption " + border}>
      <span className="headerOptionTitle">
        <i className={icon}></i>
        {title}
      </span>
    </div>
  );
}

export default HeaderOption;
