import React from "react";
// import AddButton from "../Buttons/AddButton";
// import EditProfileButton from "../Buttons/EditProfileButton";
// import LogoutButton from "../Buttons/LogoutButton";

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
        <a href="/app">  
          <li className="nav-item">
            Add Reaction
            {/* <AddButton classname="nav-link" href="/app" /> */}
          </li>
        </a>
        <a href="/editprofile">
          <li className="nav-item">
            Edit Profile
            {/* <EditProfileButton classname="nav-link" href="/editprofile" /> */}
          </li>
        </a>
        <a href="/">
          <li className="nav-item">
            Logout
            {/* <LogoutButton classname="nav-link" /> */}
          </li>
        </a>
      </ul>
    </div>
  </nav>
);

export default Navbar;