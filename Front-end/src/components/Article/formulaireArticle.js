import React, { Fragment, Component } from 'react'
import '../Article/formulaireArticle.css'
import { Redirect } from 'react-router-dom'

class Formulaire extends Component {

    state = {
        redirectionArticle : false
    }

    handleClick = event => {
        event.preventDefault()
        this.setState({ redirectionArticle : true })
    }

    render(){

        if (this.state.redirectionArticle) {
            return <Redirect push to= { `/accueil` }></Redirect>
            }

        return(

        <Fragment>

            <form id='formulaireArticle' method='POST' action=''>

                <label for='titreArticle' name='titre'>Titre de l'article</label>
                <input id='titreArticle' type='text' minLength='5' maxLength='20' name='titreArticle' required></input>

                <label for='nomArticle'>Nom et prénom de l'auteur(e)</label>
                <input id='nomArticle' type='text' minLength='2' maxLength='20' name='nomArticle' required></input>

                <label for='article'>Article</label>
                <textarea id='article'  minLength='5'  name='article' rows='10' cols='100' required></textarea>

                <input onClick = { this.handleClick } id='boutonArticle' type='submit' value='Poster'></input>

            </form>
        </Fragment>

        )
    }  
}

export default Formulaire