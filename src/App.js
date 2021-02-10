import React from 'react'
import './App.css';
import Header from './Header';
import Upload from "./Upload";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Submits from "./Submits";
import Taskshow from "./Taskshow";

function App() {
  return (
    <Router>
      <div>
        <Switch>
     
         
          <Route path="/submits/:searchTerm">
    <div className="app">

      <Header/>
      
      <div className="app__body">
      <Submits/>
      </div>
     
     
    </div>
    </Route>
    <Route path="/">
    <div className="app">

      <Header/>
      <div className="app__body">
      <Upload/>
      </div>
     
     
    </div>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
