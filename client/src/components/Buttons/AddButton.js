import React from "react";

const AddButton = props => (
    <a href="/app">
        <button 
            onClick={props.clickAdd}
            className="nav-button"
        >
            Add Reaction
        </button>
    </a>
)

export default AddButton;