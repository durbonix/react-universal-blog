// app-client.js
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// Routes
//import routes from './routes';
//console.log(routes);

const Routes = () => (
    <Router>
      <div>hi</div>
    </Router>
);

const app = document.getElementById('app');
//render(Routes, app);