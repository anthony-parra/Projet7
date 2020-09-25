import React, { Component, Fragment } from 'react'
import '../../Article/article.css'

class PostCommentaire extends Component {

    state = {
        dataCommentaire : {},
        postCommentaire: false,
        commentaire: false,
    }

    handleChangeCommentaire = (event) => {
        this.setState({
            dataCommentaire: event.target.value,
        })
    } 
    handleSubmitCommentaire = (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization',`Bearer ${token}`)

        let comment = {
            post_id : this.props.post_id,
            commentaire: this.state.dataCommentaire,
            userId: localStorage.getItem('userId')
        } 
    
        fetch('http://localhost:3000/api/commentaire/create', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(comment)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response.status);
            }
        })
        .then(response => console.log(response))
        .then(() => this.setState({ commentaire: true }))
        .catch((error) => {
            console.log({ message : 'Il y a une erreur : '+ error}) 
        })
        alert('Votre commentaire vient d\'être publié !')
    }

    handleClickPost = () => {
        const postCommentaire = !this.state.postCommentaire
        this.setState({ postCommentaire })
    }

      render() {
        
        let { postCommentaire, commentaire } = this.state

        if(commentaire){
            return window.location.reload()
        }

            return (

                <Fragment>
                    <button onClick= {this.handleClickPost} id='commentaireArticleClickedPost'>Poster un commentaire</button>
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
                </Fragment>
            )
        }
      }

export default PostCommentaire