import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppAccueil from './AppAccueil'
import PageNonTrouve from './components/PageNonTrouve'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Root = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = { App }/>
        <Route path = '/accueil/' component = { AppAccueil }/>
        <Route component = { PageNonTrouve }/>   
      </Switch>
    </BrowserRouter>
)


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('container')
);