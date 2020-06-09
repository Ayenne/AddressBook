import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserPage from './components/UserPage';
import './App.css';

/**
 * Entry point to the application
 * @return {Router}
*/
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;
