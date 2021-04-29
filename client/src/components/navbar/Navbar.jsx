import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faShareAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="btns">
                <button><FontAwesomeIcon icon={faPlus} /> Add Password</button>
                <button><FontAwesomeIcon icon={faShareAlt} /> Share</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Find your thing e.g: google.com" id="search-box" />
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </div>

        </div>
    )
}

export default Navbar
