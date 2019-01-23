import React from "react";

const Header = props => (
    <div>
        <h1 className="text-capitalize mt-5 text-center font-weight-bold"><i className="cui-medical-cross"> </i>Welcome {props.username}! </h1>
    </div>
)

export default Header;