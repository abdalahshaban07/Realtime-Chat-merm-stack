import React from "react";
import "./InfoBar.css";
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

const InfoBar = ({ room }: { room: string }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img
          className="onlineIcon"
          src={onlineIcon}
          alt="onlineIcon"
          title="online"
        />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img
            className="onlineIcon"
            src={closeIcon}
            alt="closeIcon"
            title="close"
          />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
