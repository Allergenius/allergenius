import React from "react";

const ProfileSubmit = (props) => (
    <button 
        type={props.submit}
        onClick={props.submit}
        value={props.content}
        className="btn btn-secondary btn-submit p-2 mt-3"
    >   
        Submit
    </button>
)

export default ProfileSubmit;
