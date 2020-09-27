import React, { Component } from 'react'
import '.././oneArticle.css'
import SingleArticle from '../Article/PostCommentaire/SingleArticle/SingleArticle'
import PostCommentaire from '../Article/PostCommentaire/PostCommentaire'
import Commentaires from '../Article/Commentaires/Commentaires'

class Body extends Component {

    state = {
        error: null,
        isLoaded: false,
        homes: [],
        nombreCommentaire: false,
        dataCommentaire: '',
        postComment: false
    }

    handleSubmitCommentaire = (event, post_id, dataCommentaire) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append('Authorization',`Bearer ${token}`)

        let comment = {
            post_id : post_id,
            commentaire: dataCommentaire,
            user_id: localStorage.getItem('userId'),
            email: email
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
        .then(response => {
            let homes = [...this.state.homes]
            let post = homes.find(elt => elt.post_id === post_id)
            post.comments.push(response)
            this.setState({ homes })
        })
        .then(this.setState({ postComment: true }))
        .catch((error) => {
            console.log({ message : 'Il y a une erreur : '+ error}) 
        })
        alert('Votre commentaire vient d\'être publié !')
    }

    fetchGetArticle = () => {

        const url = window.location.pathname
        const id = url.split('/')[2]
        const token = localStorage.getItem('token')
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization',`Bearer ${token}`)

        fetch(`http://localhost:3000/api/article/oneArticle/${id}`, {

            method: 'GET',
            headers: myHeaders
            
        })
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

    render(){

        const { error, isLoaded, homes, postComment } = this.state

        if(postComment){
            return window.location.reload()
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
                return(
                    
                    <div className='bloc_oneArticle'> 
                        { 
                            homes.map(home => <SingleArticle
                                key={home.post_id}
                                titre={home.titre} 
                                article={home.article}
                                date={home.date}
                                author={home.author}
                                
                                />
                            )
                        }

                        {
                            homes.map((home, index) => <PostCommentaire
                                key={'PostCommentaire' + index} 
                                post_id={home.post_id}
                                click={this.handleSubmitCommentaire}
                                />
                            )
                        }

                        {
                            homes.map((home, index) => <Commentaires
                                key={'home' + index}
                                post_id={home.post_id}
                                comments={home.comments}
                                //author={home.author}
                                />
                            )
                        }     
                    </div>
                )
        }
    }
}

export default Body