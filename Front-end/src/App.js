import React, {Component, Fragment} from 'react'
import './App.css'
import Logo from './components/Logo'
import Inscription from './components/Inscription'
import Connexion from './components/Connexion'


class App extends Component {
  render(){
   
    return(
      <Fragment>
        <header>
          <Logo />
        </header>
        <div className='inscription_connexion'>
          <Inscription />
          <p className='choix_clique'><strong>Veuillez cliquer sur <button className='choix_inscription'>Inscription</button> ou <button className='choix_connexion'>Connexion</button></strong></p>
          <Connexion />
        </div>
      </Fragment>
    )
  }
}
export default App

    