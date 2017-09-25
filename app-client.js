// app-client.js
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>


const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

const app = document.getElementById('app');
render(<App />, app);