import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/HomePage/LoginPage";
import { useState } from "react";
import Home from "./components/HomePage/Home";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className="App bg-dark h-100">
      <Home setToken={setToken} />
    </div>
  );
}

export default App;
