import React from "react";

const BackButton = props => (
    <button 
        onClick={props.clickBack}
        className="button"
    >
        X-go back
    </button>
)

export default BackButton;