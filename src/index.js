import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseConfig";
import App from "./App";
import "./index.css";
import Loader from "./components/loader";
import { ToastProvider } from "./components/messagepopup";

ReactDOM.render(
  //Give the rest of the app access to firebase and redux store
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<Loader />}>
      <React.StrictMode>
        <ToastProvider>
          <App />
        </ToastProvider>
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
