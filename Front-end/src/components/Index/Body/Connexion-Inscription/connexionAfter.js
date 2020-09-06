import React, { Fragment, Component } from 'react'
import Connexion from './connexion'
import Header from '../../Headers/headers'
import '../Connexion-Inscription/connexion-inscription.css'

class ConnexionAfter extends Component {
    
      render() {

        return(
        
            <Fragment>
                <Header />
                <div className='bloc_connexionAfter'>
                    <Connexion /> 
                </div>       
            </Fragment>
        )
      }
    }

export default ConnexionAfter