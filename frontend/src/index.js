import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import AppAccueil from './AppAccueil'
import AppArticle from './AppArticle'
import PageNonTrouve from './components/Index/PageNonTrouve/PageNonTrouve'
import ConnexionInscription from './components/Index/Body/body'
import ConnexionAfter from './components/Index/Body/Connexion-Inscription/connexionAfter'

const Root = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path ='/' component = { ConnexionInscription } />{/* Page Public afin de s'inscrire ou se connecter */}
        <Route exact path = '/connexion' component = { ConnexionAfter }/>{/* Page Public pour se connecter avec inscription */}
        <Route path='/accueil' component = { AppAccueil }/> {/* Page Protégée */}
        <Route path='/article/:id' component = { AppArticle } /> {/* Page protégée de l'article cliqué */}
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