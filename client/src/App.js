import React from 'react';
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Navbar from "./components/navbar/Navbar"
import "./App.css";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="main-page">
                <Navbar />
            </div>
        </div>
    )
}

export default App
