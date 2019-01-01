import React, { Component } from 'react';
// import '../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';
import ReactionForm from './pages/Forms/ReactionForm';


class App extends Component {
  render() {
    return (
       <div className="container">
         <div className="row">
           <div className="col-md-9"> 
            <ReactionForm />
           </div>
         </div>
       </div> 
    );
  };
};

export default App;