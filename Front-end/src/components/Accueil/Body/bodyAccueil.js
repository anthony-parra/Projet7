import React, { Component, Fragment } from 'react'
import '../Body/bodyAccueil.css'
import { Redirect } from 'react-router-dom'
import Article from '../Article/article'
import Gif from '../Gif/gif'

class BodyAcccueil extends Component {

    state = {
        redirectionArticle : false,
        redirectionGif: false
    }

    handleClickArticle = event => {
            event.preventDefault()
            this.setState({ redirectionArticle : true })
        }
    handleClickGif = event => {
        event.preventDefault()
        this.setState({ redirectionGif : true })
    }

    render(){

         if (this.state.redirectionArticle) {
            return <Redirect push to= { `/article` }></Redirect>
            }

        if (this.state.redirectionGif) {
            return <Redirect push to= { `/gif` }></Redirect>
            }

        return(

            <Fragment>

                <h2>Envie de publier ? Choisissez et cliquez !</h2>
                    <div id='article_gif'>
                            <div onClick={ this.handleClickArticle }><Article  /></div>
                            <div onClick={ this.handleClickGif }><Gif /> </div>
                    </div>
                <h2>Les dernières actualités !</h2>

            </Fragment>
        )
    }
}

export default BodyAcccueil