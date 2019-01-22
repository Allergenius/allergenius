import React from "react";

const BackButton = props => (
    <button 
        onClick={props.clickBack}
        className="btn btn-secondary"
    >
        <i className="cui-chevron-left"> </i>Go Back
    </button>
)

export default BackButton;