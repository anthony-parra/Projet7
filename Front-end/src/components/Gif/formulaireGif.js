import React, { Fragment, Component } from 'react'
import '../Gif/formulaireGif.css'
import { Redirect } from 'react-router-dom'

class FormulaireGif extends Component  {

    state = {
        redirectionGif : false
    }

    handleClick = event => {
        event.preventDefault()
        this.setState({ redirectionGif : true })
    }

        render(){

            if(this.state.redirectionGif){
                return <Redirect push to= { `/accueil` }></Redirect>
            }


            return(

                <Fragment>

                    <form id='formulaireGif' method='POST' action=''>

                        <label for='titreGif' name='titre'>Titre du GIF</label>
                        <input id='titreGif' type='text' minLength='5' maxLength='20' name='titreGif' required></input>

                        <label for='nomGif'>Nom et prénom de l'auteur(e)</label>
                        <input id='nomGif' type='text' minLength='2' maxLength='20' name='nomGif' required></input>

                        <label for='gif'>GIF</label>
                        <input id='gif' type='file' accept='.gif' multiple required></input>

                        <input onClick = { this.handleClick } id='boutonGif' type='submit' value='Poster'></input>

                    </form>
                </Fragment>

            )
        }    
    }   

export default FormulaireGif