import React, { Component, Fragment } from 'react'
import Headers from '../Index/Headers/headers'
import Formulaire from './formulaireArticle'

class EcrireArticle extends Component {

    render(){
        return(

            <Fragment>
                <Headers />
                <h2>À vous l'artiste !</h2>
                <Formulaire />
            </Fragment>

        )
    }
}

export default EcrireArticle