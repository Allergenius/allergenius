import React from "react";

const ReactionSubmitButton = (props) => (
    <button 
        type={props.submit}
        onClick={props.submit}
        value={props.content}
        className="button"
    >   
        Add Entry to Calendar
    </button>
)

export default ReactionSubmitButton;
