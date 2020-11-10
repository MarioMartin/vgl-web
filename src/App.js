import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Paginas --- 
import Home from './views/home';
import Legal from './views/legal';

//components
import Barra from './components/barra';

function App() {
  return (
    <Router>
        <Barra/>
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/legal" component={Legal} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
