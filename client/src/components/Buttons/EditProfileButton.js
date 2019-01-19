import React from "react";

const EditProfileButton = props => (
    <button 
        type={props.inputType}
        onClick={props.clickEditProfile}
        value={props.content}
        className="btn btn-light border border-secondary"
    >   
        Edit Profile
    </button>
)

export default EditProfileButton;