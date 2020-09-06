import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import AppAccueil from './AppAccueil'
import PageNonTrouve from './components/Index/PageNonTrouve/PageNonTrouve'
import ConnexionInscription from './components/Index/Body/body'
import ConnexionAfter from './components/Index/Body/Connexion-Inscription/connexionAfter'


const Root = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = { App }/>{/* Page Public */}
        <Route exact path ='/connexion-inscription' component = { ConnexionInscription } />{/* Page Public afin de s'inscrire ou se connecter */}
        <Route exact path = '/connexion' component = { ConnexionAfter }/>{/* Page Public pour se connecter avec inscription */}
        <Route path='/accueil' component = { AppAccueil }/> {/* Page Protégée */}
        <Route component = { PageNonTrouve }/>{/* Page Non Trouvée ! */}
      </Switch>
    </BrowserRouter>
)


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);