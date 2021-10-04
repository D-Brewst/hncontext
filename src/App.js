import React from 'react';
import Search from './components/Search';
import History from './components/History';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { HistoryProvider } from './utils/HistoryContext';
import './styles.css';

function App() {

  return (
    <HistoryProvider>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/search">
            <Search/>
          </Route>
          <Route exact path="/history">
            <History/>
          </Route>
          <Route exact path="*">
            <Redirect to="/search" />
          </Route>
        </Switch>
      </Router>
    </HistoryProvider>
  );
}

export default App;
