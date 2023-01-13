import React, { useState } from "react";
import "./followersCard.css";
import User from "../User/User";
import { useEffect } from "react";
import { getAllUser } from "../../api/UserRequest";
const FollowersCard = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>people you may know</h3>
      {persons.map((person, id) => {
        return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
