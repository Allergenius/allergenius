import React from "react";

const Header = props => (
    <div>
        <h2 className="text-capitalize mt-5"> Welcome {props.username}! </h2>
    </div>
)

export default Header;