import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/Navbar"
import ActionContainer from "./components/ActionContainer/ActionContainer";
import InfoUi from "./components/InfoUI/InfoUi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faClock } from '@fortawesome/free-solid-svg-icons'
import client_http_req_functions from "./client-http/password.http";
import "./App.css";

function App() {
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        client_http_req_functions.getAllPasswords().then(res => {
            setPasswordArray(res);
        }).catch(e => console.error("ERROR: while getting all passwords", e));
    }, [])
    return (
        <div className="App">
            <Navbar />
            <ActionContainer />
            <div className="md:container-lg md:mx-auto p-3 w-3/4 min-h-table rounded-lg mt-60  ">
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }} className="w-full h-16  flex items-center">
                    <div className="w-1/3 h-2/4 font-bold uppercase opacity-60 text-sm pl-8 flex items-center cursor-pointer">Name<FontAwesomeIcon className="ml-1 text-lg" icon={faCaretDown} /></div>
                    <div className="w-2/4 h-2/4 font-bold uppercase opacity-60 text-sm pl-8 flex items-center">Last used <FontAwesomeIcon className="ml-1 text-base" icon={faClock} /></div>
                </div>
                {
                    (passwordArray !== []) && passwordArray.map(password => {
                        return <InfoUi password={password} key={password.id} />
                    })
                }
            </div>
        </div>
    )
}

export default App
