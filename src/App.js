import { Amplify } from "aws-amplify";
import { Map } from "./Map";
import { withAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export function App({ signOut, user }) {
  return (
    <main>
      <Map />
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default withAuthenticator(App);
