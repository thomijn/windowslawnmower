import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import App from './App';
import Root from './Root';

export const Begin = () => (
  <Router>
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={true}>
          <Switch location={location} key={location.pathname} >
            <Route exact path="/" component={Root} />
            <Route exact path="/home" component={App} />
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Begin />
  </React.StrictMode>,
  document.getElementById('root')
);


