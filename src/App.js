import React from "react";
import AuthWall from "./components/auth/authWall";
import Main from "./components/main";
import { useUser } from "reactfire";
import { useToastContext, ADD } from "./components/messagepopup";

function App() {
  const user = useUser();
  return (
    <div class="container" className="App">
      {user.data ? (
        <Main />
      ) : (
        <>
          <AuthWall />
        </>
      )}
    </div>
  );
}

export default App;
