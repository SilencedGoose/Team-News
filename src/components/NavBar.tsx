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
      <img src="../../public/assets/logo.png" />
      {authState}
      {message}
    </header>
  );
};

export default NavBar;
