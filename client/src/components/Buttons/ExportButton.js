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

const ExportButton = props => (
    <button 
      onClick={exportCsv}
      className="btn btn-light border border-secondary"
    >
        Export Reactions to .CSV
    </button>
)

export default ExportButton;