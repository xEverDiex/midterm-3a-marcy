import React, { useState } from "react";
import Navbar from "../components/Nav";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Homepage() {

  return (
    <div>
      <Navbar></Navbar>
      <h1>HOMEPAGE</h1>
      <div className="center">
        <div className="containerMain">
          <h2>Specify the breed of your pet.</h2>

          <Button
            variant="outlined"
            color="primary"
            className="aspin"
            name="ASPIN"
            onClick={a=>this.handleInput, "ASPIN"}
          >
            <Link to="/services" className="linkA">
              ASPIN
            </Link>
          </Button>

          <Button variant="outlined" color="primary" className="beagle">
            <Link to="/services" className="linkA">
              {" "}
              DOG 2{" "}
            </Link>
          </Button>

          <Button variant="outlined" color="primary" className="bulldog">
            <Link to="/services" className="linkA">
              {" "}
              DOG 3{" "}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
