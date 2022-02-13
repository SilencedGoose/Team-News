import React, { FC } from "react";

let DisplayMember: FC<{ member: teamMember }> = ({ member }) => {
  let { name, location, country } = member;
  return (
    <div className="teamMember">
      <span>{name}</span>
      <span>{location[0]} / {location[1]}</span>
      <span>{country}</span>
    </div>
  ); 
};

export default DisplayMember;
