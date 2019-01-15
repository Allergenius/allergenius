import React from "react";
import AddButton from "../Buttons/AddButton";
import EditProfileButton from "../Buttons/EditProfileButton";
import LogoutButton from "../Buttons/LogoutButton";

const Navbar = (props) => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light">
    <a className="navbar-brand display-3" href="/home">
      Allergenius
    </a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <AddButton classname="nav-link" href="/app" clickAdd={props.clickAdd} />
        </li>
        <li className="nav-item active">
          <EditProfileButton classname="nav-link" href="/editprofile" clickEdit={props.clickEdit} />
        </li>
        <li className="nav-item">
          <LogoutButton classname="nav-link" />
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;