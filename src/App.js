import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserPage from './components/UserPage';
import Settings from './components/Settings';
import './App.scss';

/**
 * Entry point to the application
 * @return {Router}
*/
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={UserPage} />
        <Route path='/settings' component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
