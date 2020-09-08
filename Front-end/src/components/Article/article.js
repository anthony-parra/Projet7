import React, { Component, Fragment } from 'react'
import '../Article/article.css'

class Article extends Component {
    constructor(){
        super();
        this.state = {
            article: false,
            error: null,
            isLoaded: false,
            homes: [],
            homesCommentaire: [],
            dataForm: {
                titre: '',
                article:''
            },
            dataCommentaire: {
                commentaire:''
            },
            nombreCommentaire: false
        }
    }
    
    fetchGetArticle = () => {
        fetch('http://localhost:3000/api/article/allArticle')
          .then(res => res.json())
          .then((result) => {
              this.setState({
                isLoaded: true,
                homes: result
              });
            })
            .catch((error)=> { this.setState({
                isLoaded: true,
                error
            });
            })
    }

    fetchGetCommentaire = () => {
        fetch(`http://localhost:3000/api/commentaire/allCommentaire`)
          .then(res => res.json())
          .then((result) => {
              this.setState({
                  isLoaded: true,
                  homesCommentaire: result
              })
              })
            .catch((error)=> { this.setState({
                isLoaded: true,
                error
            });
            })
    }

    handleSubmit = (event) => {

        event.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
    
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

    handleClick = (event) => {
        event.preventDefault()
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
    
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

    handleChangeCommentaire = (event) => {
        const dataCommentaire = {...this.state.dataCommentaire}
        const commentaire = event.target.value
        dataCommentaire.commentaire = commentaire
        this.setState({ dataCommentaire })
    }

    handleClickCommentaire = () => {
        const nombreCommentaire = !this.state.nombreCommentaire
        this.setState({ nombreCommentaire })
    }

    componentDidMount(){
        this.fetchGetArticle()
        this.fetchGetCommentaire()
    }

      render() {

        const { error, isLoaded, homes, homesCommentaire, article, nombreCommentaire } = this.state
        const nombresCommentaires = homesCommentaire.length

        if(article){
             document.location.reload()
        }
    
        if (error) {
          return (
            <div>Error: { error.message }</div>
          );
        } else if (!isLoaded) {
            return (
            <div>Loading...</div>
            );
        } else {
            return (

                <Fragment>
                    <form id='formulaireArticle'onSubmit = {this.handleSubmit} >

                        <label htmlFor='titreArticle' name='titre' id="formulaireTitreArticle">Titre de l'article</label>
                        <input onChange = { this.handleChangeTitre } id='titreArticle' type='text' minLength='5' name='titreArticle' required></input>

                        <label htmlFor='article'>Article</label>
                        <textarea onChange = { this.handleChangeArticle } type='text' id='article'  minLength='5'  name='article' rows='10' cols='60' required ></textarea>

                        <input id='boutonArticle' type='submit' value='Poster'></input>

                    </form>
                    <div> { 
                        homes.map(home => 
                        <div id='newArticle' key={home.id}>

                            <p id= "titreNewArticle">{home.titre}</p>
                            <p id='blocArticle'>{home.article}</p>

                            <form onSubmit={ this.handleClick }>

                                <label htmlFor='commentaires' name='commentaires'/>
                                <input onChange= { this.handleChangeCommentaire } className='commentaires' name='commentaires' type='text' placeholder='Écrivez quelque chose !' required ></input>
                                
                                <input type='submit' id='boutonCommentaires' value='Poster commentaire'></input>
                                
                            </form>
                            <div>
                                <button onClick = { this.handleClickCommentaire } id='nombresCommentaires'>{nombresCommentaires} commentaires</button>
                                <button id='boutonPartager'>Partager</button>
                            </div>

                            <div> {

                                nombreCommentaire ?
                            
                            homesCommentaire.map(homeCommentaire => 
                                <div id='newCommentaire' key={homeCommentaire.id}>
                                    <p>{homeCommentaire.commentaire}</p>
                                </div>)
                                
                                : <Fragment />
                            
                            }</div>
                        </div>
                        )}
                    </div>
                </Fragment>
            )
        }
      }
    }

export default Article