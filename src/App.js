import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Consultation from './pages/Consultation';
import Gallery from './pages/Gallery';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/consultation" component={Consultation} />
          <Route path="/gallery" component={Gallery} />         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
