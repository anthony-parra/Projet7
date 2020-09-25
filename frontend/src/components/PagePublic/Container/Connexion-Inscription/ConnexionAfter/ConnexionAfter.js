import React, { Fragment, Component } from 'react'
import Connexion from '../Connexion/Connexion'
import Header from '../../../../Headers/Headers'
import '../../../pagePublic.module.css'

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