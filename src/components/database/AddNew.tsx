import React, { FC, useState } from "react";

import { addDoc } from "firebase/firestore";

let New: FC<dbProps> = ({ teams, userID }) => {
  let [name, setName] = useState("");
  let [country, setCountry] = useState("");
  let [lat, setLat] = useState(0);
  let [long, setLong] = useState(0);

  let addNewMember = (
    name: string,
    lat: number,
    long: number,
    country: string
  ) => {
    addDoc(teams, {
      uid: userID,
      member_name: name,
      lat: lat,
      long: long,
      country: country,
    });
  };

  return (
    <div className="addMemberWrapper">
      <h2 className="manageTitle">Add a new team member</h2>
      <div className="addMemberFlex">
        <div className="labels">
          <span>Name{" "}</span>
          <span>Latitude{" "}</span>
          <span>Longitude{" "}</span>
          <span>Country{" "}</span>   
        </div>
        <div className="inputs">
          <input
            name="name" 
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            name="latitude"
            value={lat}
            onChange={(e) => {
              let num = Number(e.target.value);
              setLat(num);
            }}
          />
          <input
            name="longitude"
            value={long}
            onChange={(e) => {
              let num = Number(e.target.value);
              setLong(num);
            }}
          />
          <input
            name="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <button onClick={(e) => addNewMember(name, lat, long, country)}>
        Add New Member 
        </button>
      </div>
    </div>
  );
};

export default New;
