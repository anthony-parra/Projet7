import React, { Fragment, Component } from 'react'
import LogoIndex from '../LogoPageIndex/LogoIndex'
import Connexion from '../Connexion-Inscription/connexion'
import Inscription from '../Connexion-Inscription/inscription'
import Headers from '../../Headers/headers'


class Body extends Component {

      state = {
        isShowConnexion: false,
        isShowInscription: false,
      }

      
      handleShowConnexion = () => {
        const isShowConnexion = !this.state.isShowConnexion
        this.setState({ isShowConnexion })
      }
      
      handleShowInscription = () =>  {
        const isShowInscription = !this.state.isShowInscription
        this.setState({ isShowInscription })
      }

      render() {

      const { isShowInscription } = this.state
      const { isShowConnexion } = this.state

        return(
        
        <Fragment>

                <Headers />
                <div className='inscription_connexion'>

                        {
                            isShowConnexion ? <Connexion /> : <LogoIndex />
                        }

                        <p className='choix_clique'><strong>Veuillez cliquer sur <br/>
                        <button id='choix_connexion' onClick = { this.handleShowConnexion } > Connexion </button>
                        <button id='choix_inscription' onClick = { this.handleShowInscription } > Inscription </button></strong></p>
                        
                        {
                            isShowInscription ? <Inscription /> : <LogoIndex />
                        }

                </div>
        </Fragment>

        )}
      }

export default Body