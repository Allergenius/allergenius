import React from "react";
import AddButton from "../Buttons/AddButton";
import EditProfileButton from "../Buttons/EditProfileButton";
import LogoutButton from "../Buttons/LogoutButton";

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="/home">
      Allergenius
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <AddButton classname="nav-link" href="/app" />
        </li>
        <li className="nav-item active">
          <EditProfileButton classname="nav-link" href="/editprofile" />
        </li>
        <li className="nav-item active">
          <LogoutButton classname="nav-link" />
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;