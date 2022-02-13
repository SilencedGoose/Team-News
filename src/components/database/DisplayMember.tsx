import React, { FC } from "react";

let DisplayMember: FC<{ member: teamMember }> = ({ member }) => {
  let { name, location, country } = member;
  return (
    <div>
      member: {name} @ {location[0]},{location[1]}. {country}
    </div>
  );
};

export default DisplayMember;
