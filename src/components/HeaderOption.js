import React from "react";
import "./HeaderOption.css";

function HeaderOption({ title, icon, home }) {
  return (
    <div className={"headerOption " + home}>
      <span className="headerOptionTitle">
        <i className={icon}></i>
        {title}
      </span>
    </div>
  );
}

export default HeaderOption;
