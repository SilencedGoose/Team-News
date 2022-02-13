import React, { FC } from "react";

import { Auth, User } from "firebase/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

interface navbarProps {
  auth: Auth;
  user: User | null | undefined;
}

let NavBar: FC<navbarProps> = ({ auth, user }) => {
  let authState = user ? <SignOut auth={auth}/> : <SignIn auth={auth}/>;
  let message = user ? (
    <div>Welcome {user.displayName}</div>
  ) : (
    <div>Sign in to add Team Members</div>
  );
  return (
    <header id="navbar">
      <a id="logo" href="/">
        <img src="/assets/logo.png" />
      </a>
      <div id="message">
        {message}
      </div>
      <div id="nav-buttons">
        {user ? <a href="/manage">Manage your team</a> : <div></div>}
        {authState}
      </div>
    </header>
  );
};

export default NavBar;
