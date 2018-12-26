import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';
import ReactionForm from './containers/ReactionForm';

class App extends Component {
  render() {
    return (
       <div className="container">
         <div className="columns">
           <div className="col-md-9 centered"> 
            <ReactionForm />
           </div>
         </div>
       </div> 
    );
  };
};

export default App;