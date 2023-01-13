import React from "react";
import "./logosearch.css";
import { Twitter, Search } from "@material-ui/icons";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <div className="logo">
        <Twitter style={{ color: "skyblue", fontSize: 40 }} />
      </div>
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <span className="s-icon">
          <Search />
        </span>
      </div>
    </div>
  );
};

export default LogoSearch;
