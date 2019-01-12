import React from "react";

const EditProfileButton = (props) => (
    <button 
        type={props.inputType}
        onClick={props.clickAdd}
        value={props.content}
        className="button"
    >   
        Edit Profile
    </button>
)

export default EditProfileButton;
