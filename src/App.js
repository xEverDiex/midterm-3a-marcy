import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";

import React, { useState, useEffect } from "react";
import firebase from "./utilities/firebase";

//pages
import Register from "./pages/Register";
import LandingPage from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";


import Notfound from "./pages/404";

function App() {
  const [values, setValues] = useState({
    isAuthenticated: false,
    isLoading: true,
    //user:{}
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setValues({ isAuthenticated: true, isLoading: false });
      } else {
        // No user is signed in.
        setValues({ isAuthenticated: false, isLoading: false });
      }
      console.log("useEffect", user);
    });
  }, []);

  if (values.isLoading) {
    return <div className="rotate-out-center"></div>;
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/landingpage"></Redirect>
          </Route>

          <PublicRoute
            component={Register}
            isAuthenticated={values.isAuthenticated}
            restricted={true}
            path="/register"
            exact
          />

          <PublicRoute
            component={LandingPage}
            isAuthenticated={values.isAuthenticated}
            restricted={true}
            path="/landingpage"
            exact
          />

          <PrivateRoute
            component={Homepage}
            isAuthenticated={values.isAuthenticated}
            restricted={true}
            path="/homepage"
            exact
          />

          <PrivateRoute
            component={Services}
            isAuthenticated={values.isAuthenticated}
            restricted={true}
            path="/services"
            exact
          />

          <Route component={Notfound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
