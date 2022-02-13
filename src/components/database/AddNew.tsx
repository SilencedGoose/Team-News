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
    <div>
      name{" "}
      <input
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      latitude{" "}
      <input
        name="latitude"
        value={lat}
        onChange={(e) => {
          let num = Number(e.target.value);
          setLat(num);
        }}
      />
      longitude{" "}
      <input
        name="longitude"
        value={long}
        onChange={(e) => {
          let num = Number(e.target.value);
          setLong(num);
        }}
      />
      Country:{" "}
      <input
        name="country"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <button onClick={(e) => addNewMember(name, lat, long, country)}>
        add new member
      </button>
    </div>
  );
};

export default New;
