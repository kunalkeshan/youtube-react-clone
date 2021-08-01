import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import SearchPage from './components/SearchPage/SearchPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header className="app__header" />
        <Switch>
        <Route path="/search">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sideabar />
              <Main />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;