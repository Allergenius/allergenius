import React from "react";

const DeleteButton = props => (
    <button 
        onClick={props.clickDelete}
        className="button btn btn-danger"
    >
        <i className="cui-trash"> </i>Delete Reaction
    </button>
)

export default DeleteButton;