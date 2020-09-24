import React, { Fragment, Component } from 'react'
import '../Article/article.css'

class BodyArticle extends Component {

    state = {
        error: null,
        isLoaded: false,
        homes: [],
        nombreCommentaire: false,
        postCommentaire: false,
        dataCommentaire: ''
    }

    
    fetchGetArticle = () => {

        const url = window.location.pathname
        const id = url.split('/')[2]
        fetch(`http://localhost:3000/api/article/oneArticle/${id}`)
            .then(res => res.json())
            .then((result) => {
            this.setState({
                isLoaded: true,
                homes: result
              })
            })
            .catch((error)=> { this.setState({
                isLoaded: true,
                error
            })
            })
    }

    componentDidMount(){
        this.fetchGetArticle()
    }

    handleSubmitCommentaire = (event) => {
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

    handleClickCommentaire = () => {
        const nombreCommentaire = !this.state.nombreCommentaire
        this.setState({ nombreCommentaire })
    }
    handleClickPost = () => {
        const postCommentaire = !this.state.postCommentaire
        this.setState({ postCommentaire })
    }
    handleChangeCommentaire = (event) => {
        const dataCommentaire = {...this.state.dataCommentaire}
        const commentaire = event.target.value
        dataCommentaire.commentaire = commentaire
        this.setState({ dataCommentaire })
    }

    render(){

        const { error, isLoaded, homes, nombreCommentaire, postCommentaire } = this.state
        console.log(homes)
                    
        if (error) {
            return (
              <div>Error: { error.message }</div>
            );
          } else if (!isLoaded) {
              return (
              <div>Loading...</div>
              );
          } else {
                return(

                    <Fragment>
                        <h2>{homes.titre}</h2>
                        <div key={homes.id} id={homes.id}>
                            <p className='articleClicked'>{homes.article}</p>
                            <button onClick= {this.handleClickPost} id='commentaireArticleClickedPost'>Poster un commentaire</button>
                            <button onClick= {this.handleClickCommentaire} id='commentaireArticleClicked'>Commentaires</button>
                        </div>
                        {   
                            postCommentaire 
                                ? 
                                <form id='formClicked' onSubmit={ this.handleSubmitCommentaire }>

                                        <label htmlFor='commentaires' name='commentaires'/>
                                        <input onChange= { this.handleChangeCommentaire } className='commentaires' name='commentaires' type='text' placeholder='Écrivez quelque chose !' required ></input>
                                        
                                        <input type='submit' className='boutonCommentaires' value='Poster commentaire'></input>
                                        
                                    </form>
                                : 
                            <Fragment />
                        }
                        {   
                            nombreCommentaire 
                                ? 
                            <div>
                                <input type='hidden' value={homes.post_id}/>
                                <p post_id={homes.post_id} className='blocCommentaireClicked'>=> {homes.comments}</p>
                            </div>
                                : 
                            <Fragment />
                        }
                        
                    </Fragment>
                )
        }
    }
}

export default BodyArticle