import React from "react";
import axios from "axios";

var objectToCsv = function(data) {
  const csvRows = [];

  //get the headers
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  //loop over the rows
  for (const row of data) {
      const values = headers.map(header => {
          const escaped = (''+row[header]).replace (/"/g, '\\"');
          return `"${escaped}"` 
      })
      csvRows.push(values.join(","));
  }

  return csvRows.join("\n")
}

var download = function(data){
  //Create the actual csv file as a blob object
  const blob = new Blob([data], {type: "text/csv"});
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a")
  a.setAttribute("hidden", "");
  a.setAttribute("href", url)
  a.setAttribute("download", "reactions.csv")
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

var exportCsv = function(e){
  e.preventDefault();

  var username = "testUser"
  axios.get("/api/reactions/" + username)
      .then(res => {
          //Special thanks to https://www.youtube.com/watch?v=eicLNabvZN8 
          const csvData = objectToCsv(res.data);
          download(csvData)
      })
}

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