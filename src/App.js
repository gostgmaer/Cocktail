import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import Router from "./Router/Router";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <main className="classMain">
        <Header></Header>
        <Router></Router>
      </main>
    </div>
  );
}

export default App;
