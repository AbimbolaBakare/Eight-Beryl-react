import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Consultation from './pages/Consultation';
import Gallery from './pages/Gallery';
//import LightToggle from './components/lightToggle'



function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" axact component={Services} />
          <Route path="/consultation" exact component={Consultation} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
