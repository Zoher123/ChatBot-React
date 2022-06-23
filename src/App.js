//import logo from './logo.svg';
import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import Messages from "./components/Messages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
class App extends Component {
  render() {
    return (
      <article
         
      >
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Messages />} />
          </Routes>
        </BrowserRouter>
      </article>
    );
  }
}

export default App;
