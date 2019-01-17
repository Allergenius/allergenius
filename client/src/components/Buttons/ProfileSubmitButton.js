import React from "react";

const ProfileSubmit = (props) => (
    <button 
        type={props.submit}
        onClick={props.submit}
        value={props.content}
        className="button btn btn-success"
    >   
        Submit
    </button>
)

export default ProfileSubmit;
