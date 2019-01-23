import React from "react";

const AddButton = props => (
    <button 
        onClick={props.clickAdd}
        className="btn border border-secondary"
    >
        <i className="cui-envelope-letter"> </i>Add Reaction
    </button>
)

export default AddButton;