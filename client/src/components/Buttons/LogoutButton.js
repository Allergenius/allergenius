import React from "react";

const LogoutButton = (props) => (
    <button 
        type={props.inputType}
        style={{ cursor: 'pointer' }}
        // onClick={this.logout}
        className='button'
    >   
        Logout
    </button>
)

export default LogoutButton;
