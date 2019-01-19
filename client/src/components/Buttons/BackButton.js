import React from "react";

const BackButton = props => (
    <button 
        onClick={props.clickBack}
        className="button btn btn-danger"
    >
        Go Back
    </button>
)

export default BackButton;