import React, { useState } from 'react'
import firebase from "../utilities/firebase"

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../components/css/general.css';

export default function Register() {
    const [payload, setPayload] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })



    const handleChange = (prop) => (e) => {
        setPayload({ ...payload, [prop]: e.target.value });
    }

    const register = (e) => {
        e.preventDefault();

        if(!payload.email || !payload.password || !payload.confirmpassword){
            alert("Cannot proceed with empty fields");
        }else if(payload.password !== payload.confirmpassword){
            alert("Passwords do not match");
        }else{
            firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then((userCredential) => {
                // Signed in 
                //var user = userCredential.user;
                // ...
                alert("Welcome new user.");
            })
            .catch((error) => {
                //var errorCode = error.code;
                //var errorMessage = error.message;
                // ..
                alert("Something went wrong.");
            });
        }
    };
    return ( 
        <div>
            <form className="center">
            <h2>Registration</h2>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange("email")}
                    value={payload.email}
                />
                <br/><br/>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={handleChange("password")}
                    value={payload.password}
                />
                <br/><br/>
                <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={handleChange("confirmpassword")}
                    value={payload.confirmpassword}
                />
                <br/><br/>
                <Button variant="contained" onClick={register}>Sign Up</Button>
            </form>
        </div>
    )
}
