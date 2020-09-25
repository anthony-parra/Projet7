import React, { Component, Fragment } from 'react'
import '../../articles.css'

class newArticle extends Component {

    state = {

        dataForm: {
            titre: '',
            article:''
        },
        article: false,
    }

    handleSubmit = (event) => {

        event.preventDefault();
        const token = localStorage.getItem('token')

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization',`Bearer ${token}`)
        fetch('http://localhost:3000/api/article/create', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(this.state.dataForm)
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
        alert('Votre article vient d\'être publié !') 
    }

    handleChangeTitre = (event) => {
        const dataForm = {...this.state.dataForm}
        const titre = event.target.value
        dataForm.titre = titre
        this.setState({ dataForm })
    }
    handleChangeArticle = (event) => {
        const dataForm = {...this.state.dataForm}
        const article = event.target.value
        dataForm.article = article
        this.setState({ dataForm })
    }

    render(){

        const { article } = this.state

        if(article){
            return window.location.reload()
        }

        return(
            <Fragment>

                <form id='formulaireArticle'onSubmit = {this.handleSubmit} >

                    <label htmlFor='titreArticle' name='titre' id="formulaireTitreArticle">Titre de l'article</label>
                    <input onChange = { this.handleChangeTitre } id='titreArticle' type='text' minLength='5' name='titreArticle' required></input>

                    <label htmlFor='article'>Article</label>
                    <textarea onChange = { this.handleChangeArticle } type='text' id='article'  minLength='5'  name='article' rows='10' cols='60' required ></textarea>

                    <input id='boutonArticle' type='submit' value='Poster'></input>

                </form>

            </Fragment>
        )
    }
}

export default newArticle