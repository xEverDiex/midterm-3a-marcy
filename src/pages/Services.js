import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../components/Nav";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

export default function Services() {
  const [payload, setPayload] = useState({
    name: "",
    age: "",
  });

  const handleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

    
  const details=()=>{
      alert("Succesfully Booked: "+payload.name,payload.Checkup);
  }
  return (
    <div clas>
      <Navbar></Navbar>
      <div className="center">
        <h1>Enter details of your fur buddies</h1>
        <form>
          <TextField
            className="spacer"
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
            onChange={handleChange("name")}
            value={payload.name}
          />
          <br />
          <TextField
            className="spacer"
            required
            id="outlined-required"
            label="Age"
            variant="outlined"
            onChange={handleChange("age")}
            value={payload.age}
          />
          <br />
          <FormGroup className="center">
            <FormControlLabel 
              control={
                <Checkbox
                  //checked={gilad}
               
                  name="Vaccine"
                />
              }
              label="Vaccine"
            />
            <FormControlLabel
              control={
                <Checkbox
                  //checked={jason}
            
                  name="Grooming"
                />
              }
              label="Grooming"
            />
            <FormControlLabel
              control={
                <Checkbox
                  //checked={antoine}
            
                  name="Checkup"
                />
              }
              label="Check-up"
            />
          </FormGroup>
          <br />
          <Button variant="contained" className="buttonPrime" onClick={details}>
            CONFIRM
          </Button>
        </form>
      </div>
    </div>
  );
}
