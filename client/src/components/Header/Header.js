import React from "react";

const Header = props => (
    <div>
        <h1>Allergenius</h1>
        <h2 className="text-capitalize"> Welcome {props.username}! </h2>
    </div>
)

export default Header;