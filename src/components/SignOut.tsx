import React, { FC } from "react";

import { signOut } from "firebase/auth";

let SignOut: FC<authProps> = ({ auth }) => {
  return (
    <button
      onClick={() => {
        signOut(auth);
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
