import React, {Component, Fragment} from 'react'
import './App.css'
import Logo from './components/Logo'
import Inscription from './components/Inscription'
import Connexion from './components/Connexion'


class App extends Component {
  render(){
    return(
      <Fragment>
       <Logo />

          <Inscription />
          <Connexion />
      </Fragment>
    )
  }
}

export default App
