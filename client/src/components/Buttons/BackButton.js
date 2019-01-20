import React from "react";

const BackButton = props => (
    <button 
        onClick={props.clickBack}
        className="btn btn-secondary"
    >
        Go Back
    </button>
)

export default BackButton;