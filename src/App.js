import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import { Background } from "./sections/Background";
import { Home } from "./pages/Home";
import { CodeOfConduct } from "./pages/CodeOfConduct";

export default function App() {
  return (
    <div className="App">
      <Background />
      <div style={{ position: "absolute", width: "100vw" }}>
        <Router>
          <Switch>
            <Route path="/code-of-conduct">
              <CodeOfConduct />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
