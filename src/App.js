import React from "react";
import AuthWall from "./components/auth/authWall";
import Main from "./components/main";
import { useUser } from "reactfire";

//Figure out how to use react contexts or such to make global message popups that don't disspear becuase the component is unmounted

function App() {
  const user = useUser();
  console.log(user);
  return (
    <div class="container" className="App">
      {user.data ? (
        <Main />
      ) : (
        <>
          <AuthWall />
        </>
      )}{" "}
    </div>
  );
}

export default App;
