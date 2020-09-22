import React, { Fragment, Component } from 'react'
import Image from '../../images/icon.png'
import ArticleAccueil from '../Article/articleAccueil'

class BodyAccueil extends Component {

    render(){
              
        return(

            <Fragment>
                <h2><img src={Image} alt='Logo de Groupomania'></img><span id='soulignementTitre'>Fil d'actualité</span></h2>
                    <div id='allArticles'>
                        <ArticleAccueil />
                    </div>
            </Fragment>
        )
    }
}

export default BodyAccueil