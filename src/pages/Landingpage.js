import React, { useState } from "react";
import { Link } from "react-router-dom";
//
import firebase from "../utilities/firebase";

//material ui / styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../components/css/general.css";

export default function Landingpage() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  //const history = useHistory();

  const handleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  
  const login = (e) => {
    e.preventDefault();

    if (!payload.email || !payload.password) {
      alert("Cannot proceed with empty fields");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          alert("Signed in.");
        })
        .catch((error) => {
          alert("Email or Password is incorrect.");
        });
    }
  };

  return (
    <div className="center">
      <div className="containerLandingPage">
        <div className="containerFormLandingPage">
          <h2>Login</h2>
          <form >
            <TextField
              className="spacer"
              required
              id="outlined-required"
              label="Email"
              variant="outlined"
              onChange={handleChange("email")}
              value={payload.email}
            />
            <br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={handleChange("password")}
              value={payload.password}
            />

            <br />
            <Button variant="contained" onClick={login} className="buttonPrime">
              Login
            </Button>
          </form>

          <Button variant="contained" className="buttonPrime">
            <Link to="/register" className="linkA">
              {" "}
              Register{" "}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
