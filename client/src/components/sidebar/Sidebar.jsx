import React from 'react'
import logo from "../../Assets/priyanshu.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faBars, faCog, faPlus, faStickyNote, faUserShield } from '@fortawesome/free-solid-svg-icons';
// import MenuBar from "../../Assets/icons8-menu.gif"
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="Sidebar">
            <FontAwesomeIcon className="sidebar-toogle-btn" icon={faBars} />
            <div className="content">
                <ul>
                    <li className="list-options"><FontAwesomeIcon className="content--icon" icon={faShieldAlt} />Password's</li>
                    <li className="list-options"><FontAwesomeIcon className="content--icon" icon={faStickyNote} />Secure Notes</li>
                    <li className="list-options"><FontAwesomeIcon className="content--icon" icon={faUserShield} />Personal info</li>
                </ul>
            </div>
            <div className="footer">
                <a href="http://blank" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCog} /> My Account</a>
                <button><FontAwesomeIcon icon={faPlus} /> Add Password</button>
            </div>
        </div>
    )
}

export default Sidebar
