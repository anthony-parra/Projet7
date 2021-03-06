import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import AppAccueil from './AppAccueil'
import AppOneArticle from './AppOneArticle'
import PageNonTrouve from './components/PagePublic/PageNonTrouve/PageNonTrouve'
import ConnexionInscription from './components/PagePublic/Container/Body/body'
import ConnexionAfter from './components/PagePublic/Container/Connexion-Inscription/ConnexionAfter/ConnexionAfter'

const Root = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path ='/' component = { ConnexionInscription } />{/* Page Public afin de s'inscrire ou se connecter */}
        <Route exact path = '/connexion' component = { ConnexionAfter }/>{/* Page Public pour se connecter avec inscription */}
        <Route path='/accueil' component = { AppAccueil }/> {/* Page Protégée */}
        <Route path='/article/:id' component = { AppOneArticle } /> {/* Page protégée de l'article cliqué */}
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