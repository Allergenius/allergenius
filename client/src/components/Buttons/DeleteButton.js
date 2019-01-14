import React from "react";

const DeleteButton = props => (
    <button 
        onClick={props.clickDelete}
        className="button"
    >
        Delete Reaction
    </button>
)

export default DeleteButton;