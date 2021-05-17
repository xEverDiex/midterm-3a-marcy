import React from 'react'
import { Link } from "react-router-dom";
import firebase from "../utilities/firebase";

//material
import './css/general.css';
import Button from '@material-ui/core/Button';

export default function Nav() {
    const logout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <Link to="/homepage">
                            HOME
                        </Link>
                    </li>
                
                    <Button variant="outlined" color="secondary" onClick={logout} className={"logout"}>
                        Signout
                    </Button>
                </ul>
            </nav>
        </div>
    )
}
