import React, { Fragment, Component } from 'react'
import Image from './Image/icon.png'
import Articles from '../Articles/Articles'
import '../articles.css'

class BodyAccueil extends Component {

    render(){
              
        return(

            <Fragment>
                <h2><img className='logoTitre' src={Image} alt='Logo de Groupomania'></img><span id='soulignementTitre'>Fil d'actualité</span></h2>
                    <div id='allArticles'>
                        <Articles />
                    </div>
            </Fragment>
        )
    }
}

export default BodyAccueil