import React from "react";


// var showFunction = function(event){
//   this.style = 'display=block'
//   console.log(event)
// }

const Navbar = (props) => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light">
    <div className="navbar-header"></div>
    <a className="navbar-brand display-3" href="/home">
      Allergenius
    </a>

    {/* <button onClick={(e) => showFunction(e)} className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <a href="/app">  
          <li className="nav-item">
            Add Reaction
          </li>
        </a>
        <a href="/editprofile">
          <li className="nav-item">
            Edit Profile
          </li>
        </a>
        <a href="/">
          <li className="nav-item">
            Logout
          </li>
        </a>
      </ul>
    </div>
  </nav>
);

export default Navbar;