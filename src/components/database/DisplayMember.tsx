import React, { FC } from "react";

let DisplayMember: FC<{ member: teamMember }> = ({ member }) => {
  let { name, location, country, del } = member;
  return (
    <div className="teamMember">
      <span>{name}</span>
      <span>
        {location[0]} / {location[1]}
      </span>
      <span>{country}</span>
      <span className="delete">
        <button
          onClick={() => {
            del();
          }}
        >
          🗑️
        </button>
      </span>
    </div>
  );
};

export default DisplayMember;
