import React from "react";

const ReactionSubmitButton = (props) => (
    <a href="/home">
        <button 
            type={props.submit}
            onClick={props.submit}
            value={props.content}
            className="button"
        >   
            Add Entry to Calendar
        </button>
    </a>
)

export default ReactionSubmitButton;
