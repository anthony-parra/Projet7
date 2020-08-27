import React, { Fragment } from 'react'
import Formulaire from '../Article/formulaireArticle'
import Image from '../../images/icon.png'

const BodyAccueil = () => {
    return(

        <Fragment>
            <h2><img src={Image} alt='Logo de Groupomania'></img>Fil d'actualité</h2>
            <Formulaire />
        </Fragment>

    )
}

export default BodyAccueil