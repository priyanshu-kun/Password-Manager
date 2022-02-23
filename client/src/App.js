import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/Navbar"
import client_http_req_functions from "./client-http/password.http";
import {
    Switch,
    Route
} from "react-router-dom";
import Password from "./components/Password";
import Security from "./components/Security/Security";
import _404NotFound from "./_404NotFound"
import "./App.css";

function App() {
    const [passwordArray, setPasswordArray] = useState([])
    const [Search, setSearch] = useState("");
    useEffect(() => {
        client_http_req_functions.getAllPasswords().then(res => {
            setPasswordArray(res);
        }).catch(e => console.error("ERROR: while getting all passwords", e));
    }, [])
    console.log("passwordArray: ", passwordArray)
    if(passwordArray === undefined) {
        setPasswordArray([])
    }
    return (
        <div className="App">
            <Navbar  setSearch={setSearch} />
            <Switch>
                <Route exact path="/" render={(props) => <Password {...props} passwordArray={passwordArray} Search={Search} />} />
                <Route exact path="/security" render={(props) => <Security {...props} passwordArray={passwordArray} />} />
                <Route path="*" component={_404NotFound} />
            </Switch>
        </div>
    )
}

export default App
