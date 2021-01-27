import React from "react";
import AuthWall from "./components/auth/authWall";
import Main from "./components/main";
import { useUser } from "reactfire";

function App() {
  const user = useUser();
  console.log(user);
  return <div className="App">{user.data ? <Main /> : <AuthWall />}</div>;
}

export default App;
