import React, { Component, Fragment } from 'react'
import LogoIndex from '../Body/LogoPageIndex/LogoIndex'
import Connexion from './Connexion-Inscription/connexion'
import Inscription from './Connexion-Inscription/inscription'

class Body extends Component {

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

export default Body