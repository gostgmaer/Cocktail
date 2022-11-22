import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import Router from "./Router/Router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <main className="classMain d-flex flex-column h-100">
        <Header></Header>
        <Router></Router>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
