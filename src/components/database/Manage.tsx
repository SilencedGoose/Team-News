import React, { FC, useEffect } from "react";

// Import the functions you need from the SDKs you need
import NavBar from "../NavBar";
import List from "./List";
import AddNew from "./AddNew";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../SignIn";

const firebaseConfig = {
  apiKey: "AIzaSyBSciiHKw05DoLWA2k-zPsxC3RdajnXdi0",
  authDomain: "team-news-3f573.firebaseapp.com",
  projectId: "team-news-3f573",
  storageBucket: "team-news-3f573.appspot.com",
  messagingSenderId: "770509915637",
  appId: "1:770509915637:web:ffe49c9269d62c32018cbc",
  measurementId: "G-SE2KG578K0",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const store = getFirestore(firebaseApp);

let Manage: FC = () => {
  let [user] = useAuthState(auth);
  let teams = collection(store, "teams");

  let userID: string = user?.uid || "";

  let normal = (
    <main className="manageWrapper">
      <List teams={teams} userID={userID} />
      <div className="manageGhost">
        <AddNew teams={teams} userID={userID} />
      </div>    
    </main>
  );

  return (
    <body>
      <div id="fixed">
        <NavBar auth={auth} user={user} />
      </div>
      {!user ? <SignIn auth={auth} /> : normal}
    </body>
  );
};

export default Manage;
