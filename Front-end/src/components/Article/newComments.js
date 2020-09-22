import React, { Component, Fragment } from 'react'
//import { Redirect } from 'react-router-dom'
import '../Article/article.css'

class NewComments extends Component {

    state = {
        dataCommentaire:'',
    }

handleClick = (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization',`Bearer ${token}`)

    fetch('http://localhost:3000/api/commentaire/create', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(this.state.dataCommentaire)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(response => console.log(response))
    .then(() => this.setState({ article: true }))
    .catch((error) => {
        console.log({ message : 'Il y a une erreur : '+ error}) 
    })
    alert('Votre commentaire vient d\'être publié !')
}

handleChangeCommentaire = (event) => {
    const dataCommentaire = {...this.state.dataCommentaire}
    const commentaire = event.target.value
    dataCommentaire.commentaire = commentaire
    this.setState({ dataCommentaire })
}

handleClickArticle = (event) => {
    const article = !this.state.article
    this.setState({ article })
    this.state.homes.map(home => {
        home.id = event.target.id
        return localStorage.setItem('articleId', home.id)
    })
}

    render(){

        return(

            <Fragment>

            </Fragment>
        )
    }
}

export default NewComments