import React, { Component, Fragment } from 'react'
import '../Article/article.css'
import { Redirect } from 'react-router-dom';

class Article extends Component {
    constructor(){
        super();
        this.state = {
            article: false,
            error: null,
            isLoaded: false,
            homes: [],
            dataForm: {
                titre: '',
                article:''
            },
            dataCommentaire:'',
            nombreCommentaire: false,
            partage: false,
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

    handleClickCommentaire = (event) => {
        const nombreCommentaire = !this.state.nombreCommentaire
        this.setState({ nombreCommentaire })
        this.state.homes.map(home => {
            return home.id = event.target.id
        })
    }

    handleClickArticle = (event) => {
        const article = !this.state.article
        this.setState({ article })
        this.state.homes.map(home => {
            home.id = event.target.id
            return localStorage.setItem('articleId', home.id)
        })
    }
    handlePartage = () => {
        const url = new URL(window.location).href
        localStorage.setItem('urlCopie', url)
        const partage = !this.state.partage
        this.setState({ partage })
    }
    handleCopied = () => {
        const url = document.querySelector('textarea.partage')
        url.select()
        document.execCommand('copy')
        alert('Le lien vient d\'être copié dans votre presse papier')
    }

    componentDidMount(){
        this.fetchGetArticle()
    }

      render() {

        const { error, isLoaded, homes, article, nombreCommentaire, partage } = this.state
        const email = localStorage.getItem('email')
        const prenom = email.split('.')[0]
        const falseName = email.split('@')[0]
        const nom = falseName.split('.')[1]
        const url = localStorage.getItem('urlCopie')
   
        if(article){
            return <Redirect push to='/article' />
        }

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
                    <div> 
                    { 
                        homes.map(home =>
                            <div className='bloc_color' key={home.id}>
                                <div post_id={home.post_id}  className='newArticle'>

                                    <p id= "titreNewArticle">{home.titre}</p>
                                    <p id='blocArticle'>{home.article}</p>
                                    <p className='writeBy'>Écrit par : <strong>{prenom} {nom}</strong></p>

                                    <form onSubmit={ this.handleClick }>

                                        <label htmlFor='commentaires' name='commentaires'/>
                                        <input onChange= { this.handleChangeCommentaire } className='commentaires' name='commentaires' type='text' placeholder='Écrivez quelque chose !' required ></input>
                                        
                                        <input type='submit' className='boutonCommentaires' value='Poster commentaire'></input>
                                        
                                    </form>
                                    <div>
                                        <button value={home.id} onClick = { this.handleClickCommentaire } className='nombresCommentaires'>Commentaires</button>
                                        <button onClick={this.handlePartage}  className='boutonPartager'>Partager</button>
                                        <button onClick = { this.handleClickArticle } id={home.id} className='boutonRedirection'>Allez sur l'article !</button>
                                        
                                        {
                                            partage ? 
                                            <div className='blocPartage'>
                                                <textarea defaultValue={url} className='partage'></textarea>
                                                <button className='boutonPartageLien' onClick={this.handleCopied}>Copier le lien</button>
                                            </div> : 
                                            <Fragment />
                                        }
                                        {
                                            nombreCommentaire 
                                                ? 
                                            <div>
                                                <input type='hidden' value={home.post_id} />
                                                <p post_id={home.post_id} className='bloc_commentaire'>{home.comments}</p>   
                                            </div>
                                                : 
                                            <Fragment />
                                        }
                                            
                                    </div>
                                </div>
                            </div>   
                        )   
                    }   
                    </div>
                </Fragment>
            )
        }
      }
    }

export default Article