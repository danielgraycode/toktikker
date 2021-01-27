import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseConfig";
import App from "./App";
import "./index.css";
import Loader from "./components/loader";

ReactDOM.render(
  //Give the rest of the app access to firebase
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<Loader />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
