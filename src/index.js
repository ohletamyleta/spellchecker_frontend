import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SpellContainer from './containers/SpellContainer'
import SpellbookContainer from './containers/SpellbookContainer'
import NavBar from './components/NavBar'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <NavBar />
    <SpellContainer />
    <SpellbookContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

