import React from "react";
import "./trendCard.css";
import { TrendData } from "../../data/TrendData";
const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span># {trend.name}</span>
            <span>{trend.shares}K shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
