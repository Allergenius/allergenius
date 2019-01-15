import React from "react";

const AddButton = props => (
    <button 
        onClick={props.clickAdd}
        className="btn btn-light border border-secondary"
    >
        Add Reaction
    </button>
)

export default AddButton;