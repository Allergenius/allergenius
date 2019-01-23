import React from "react";

const Header = props => (
    <div className="header-styling mt-5 text-center">
        <p className="text-capitalize">Welcome {props.username}! </p>
    </div>
)

export default Header;