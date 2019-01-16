import React from "react";

const LogoutButton = (props) => (
    <button 
        type={props.inputType}
        style={{ cursor: 'pointer' }}
        // onClick={this.logout}
        className='btn btn-light border border-secondary'
    >   
        Logout
    </button>
)

export default LogoutButton;
