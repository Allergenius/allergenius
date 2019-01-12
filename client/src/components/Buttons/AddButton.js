import React from "react";

const AddButton = props => (
    <button 
        onClick={props.clickAdd}
        className="button"
    >
        Add Reaction
    </button>
)

export default AddButton;