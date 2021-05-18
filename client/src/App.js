import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Save from "./pages/Save";
import Nav from "./components/Nav";
import "./index.css"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Homepage />
          </Route>
          <Route exact path="/save">
            <Save/>
          </Route>
          <Route>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
