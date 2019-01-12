import React from "react";

const ProfileSubmit = (props) => (
    <a href="/home">
        <button 
            type={props.submit}
            onClick={props.submit}
            value={props.content}
            className="button"
        >   
            Submit
        </button>
    </a>
)

export default ProfileSubmit;
