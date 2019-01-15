import React from "react";

const LogoutButton = (props) => (
    <a href="/">
        <button 
            type={props.inputType}
            style={{ cursor: 'pointer' }}
            // onClick={this.logout}
            className="nav-button"
        >   
            Logout
        </button>
    </a>
)

export default LogoutButton;
