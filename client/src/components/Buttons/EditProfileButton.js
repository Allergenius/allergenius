import React from "react";

const ButtonEditProfile = (props) => (
    <button 
        type={props.inputType}
        onClick={props.clickAdd}
        value={props.content}
        className="button"
    >   
        Add Reaction
    </button>
)

export default ButtonEditProfile;
