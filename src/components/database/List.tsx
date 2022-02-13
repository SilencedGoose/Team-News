import React, { FC, useState } from "react";
import {
  DocumentData,
  onSnapshot,
  Query,
  query,
  where,
} from "firebase/firestore";

import DisplayMember from "./DisplayMember";

let List: FC<dbProps> = ({ teams, userID }) => {
  let teamMembers: teamMember[];
  let setTeamMembers: any;
  [teamMembers, setTeamMembers] = useState([]);

  let q: Query<DocumentData> = query(teams, where("uid", "==", userID));

  let unsub = onSnapshot(q, (querySnapshot) => {
    const members: teamMember[] = [];

    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let temp: teamMember = {
        name: data.member_name,
        location: [data.lat, data.long],
        country: data.country,
      };

      members.push(temp);
    });

    setTeamMembers(members);
  });

  return (
    <div>
      {teamMembers.map((e) => (
        <DisplayMember member={e} />
      ))}
    </div>
  );
};

export default List;
