import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  Firestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { FC, useState } from "react";

let Data: FC<{ store: Firestore; user: User }> = ({ store, user }) => {
  let [data, setData] = useState([<div></div>]);

  let teams = collection(store, "teams");

  let q = query(teams, where("uid", "==", user.uid));
  let unsub = onSnapshot(q, (querySnapshot) => {
    const members: any[] = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let temp = (
        <li>
          name: {data.name} <br />@ lat: {data.lat} long: {data.long}
        </li>
      );
      members.push(temp);
    });
    setData(members);
  });

  let addNewMember = () => {
    addDoc(teams, {
      uid: user.uid,
      member_name: "jake",
      lat: 10,
      long: 10,
    });
  };

  return (
    <div>
      <ul>{data}</ul>
      <button onClick={(e) => addNewMember()}>add new member</button>;
    </div>
  );
};
