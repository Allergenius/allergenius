import React from "react";

const EditProfileButton = (props) => (
    <a href="/editprofile">
        <button 
            type={props.inputType}
            onClick={props.clickAdd}
            value={props.content}
            className="nav-button"
        >   
            Edit Profile
        </button>
    </a>
)

export default EditProfileButton;
