import React, { Fragment, Component } from 'react'
import Image from '../../images/icon.png'
import Article from '../Article/article'

class BodyAccueil extends Component {

    render(){
              
        return(

            <Fragment>
                <h2><img src={Image} alt='Logo de Groupomania'></img><span id='soulignementTitre'>Fil d'actualité</span></h2>
                    <div id='allArticles'>
                        <Article />
                    </div>
            </Fragment>
        )
    }
}

export default BodyAccueil