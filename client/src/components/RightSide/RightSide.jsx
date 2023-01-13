import React, { useState } from "react";
import "./rightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="" />
        </Link>
        <UilSetting style={{ cursor: "pointer" }} />
        <img src={Noti} alt="" />
        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      {/* for calling modal after click on share button */}
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      {/* modal button end here */}
    </div>
  );
};

export default RightSide;
