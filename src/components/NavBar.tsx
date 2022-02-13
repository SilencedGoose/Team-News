import React, { FC } from "react";

import { Auth, User } from "firebase/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

interface navbarProps {
  auth: Auth;
  user: User | null | undefined;
}

let NavBar: FC<navbarProps> = ({ auth, user }) => {
  let authState = user ? <SignOut auth={auth} /> : <SignIn auth={auth} />;
  let message = user ? (
    <div>welcome {user.displayName}</div>
  ) : (
    <div>Please sign in</div>
  );
  return (
    <header id="navbar">
      <a href="/">
        <img src="/assets/logo.png" />
      </a>
      {user ? <a href="/manage">Manage your team</a> : <div></div>}
      {message}
      {authState}
    </header>
  );
};

export default NavBar;
