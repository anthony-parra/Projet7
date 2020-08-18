import React, {Component, Fragment} from 'react'
import './App.css'
import Logo from './components/Logo'
import LogoIndex from './components/LogoIndex'
import Inscription from './components/Inscription'
import Connexion from './components/Connexion'


class App extends Component {

state = {
  isShowConnexion: false,
  isShowInscription: false
}

handleShowConnexion = () => {
  const isShowConnexion = !this.state.isShowConnexion
  this.setState({ isShowConnexion })
}

handleShowInscription = () => {
  const isShowInscription = !this.state.isShowInscription
  this.setState({ isShowInscription })
}
  render(){

    const { isShowInscription } = this.state
    const { isShowConnexion } = this.state

    return(
      <Fragment>
        <header>
          <Logo />
        </header>
        <div className='inscription_connexion'>

          {
            isShowConnexion ? <Connexion /> : <LogoIndex />
          }
          
          <p className='choix_clique'><strong>Veuillez cliquer sur <br/>
          <button className='choix_inscription' onClick={ this.handleShowConnexion} > Connexion </button>
          <button className='choix_connexion' onClick={ this.handleShowInscription}> Inscription </button></strong></p>
          
          {
            isShowInscription ? <Inscription /> : <LogoIndex />
          }

        </div>
      </Fragment>
    )
  }
}
export default App

    