import React, { FC, useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import NavBar from "./NavBar";
import Map from "./Map";
import News from "./News";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

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

let App: FC = () => {
  let [location, setLocation] = useState("");
  let [user] = useAuthState(auth);
  let userID: string = user?.uid || "";

  return (
    <body>
      <div id="fixed">
        <NavBar auth={auth} user={user} />
        <Map store={store} user={user} setLocation={setLocation} />
      </div>

      <div className="spacer"></div>

      <div className="arrow-container bounce">
        <p>
          Scroll down for news
          <br />
        </p>
        <div className="arrowDown"></div>
      </div>

      <div id="news-content">
        <News location={location} />
      </div>
    </body>
  );
};

export default App;
