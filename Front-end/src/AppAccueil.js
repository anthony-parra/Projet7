import React, {Component, Fragment} from 'react'
import Logo from './components/Logo'

class AppAccueil extends Component {
    render(){
     
      return(
        <Fragment>
          <header>
            <Logo />
          </header>
          <h1>Bienvenue sur la Page Accueil !</h1>
        </Fragment>
      )
    }
  }
  export default AppAccueil