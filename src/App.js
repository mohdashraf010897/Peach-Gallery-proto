import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import LoginAndRegister from "./components/loginAndRegister.component";
import Home from "./components/home";
import Gallery from "./components/gallery";

import "./styles/app.styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="main-wrapper">
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/join" component={LoginAndRegister} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
