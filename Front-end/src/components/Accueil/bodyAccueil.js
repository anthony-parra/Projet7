import React, {Fragment} from 'react'
import Image from '../../images/icon.png'
import Article from '../Article/article'

const BodyAccueil = () => {
    return(

        <Fragment>
                <h2><img src={Image} alt='Logo de Groupomania'></img><span id='soulignementTitre'>Fil d'actualité</span></h2>
                <div id='blocContainer'>    
                    <div id='colonneGauche'>
                        <p>Bonjour Anthony !</p>
                        <p>Se déconnecter</p>
                        <button>Déconnexion !</button>
                        <p>Supprimer votre compte</p> 
                        <button>Suppression !</button>
                    </div>
                    <div id='allArticles'>
                        <Article />
                    </div>
                    <div id='colonneDroite'></div>
                </div>
        </Fragment>
    )
}

export default BodyAccueil