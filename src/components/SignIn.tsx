import React, { FC } from "react";

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

let SignIn: FC<authProps> = ({ auth }) => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return <button onClick={signIn}> Sign In </button>;
};

export default SignIn;
