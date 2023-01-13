import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import InfoCard from "../InfoCard/InfoCard";
import "../profileSide/profileSide.css";

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
