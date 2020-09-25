import React, { Fragment, Component } from 'react'
import '.././oneArticle.module.css'
import SingleArticle from '../Article/SingleArticle/SingleArticle'
import PostCommentaire from '../Article/PostCommentaire/PostCommentaire'
import Commentaires from '../Article/Commentaires/Commentaires'

class Body extends Component {

    state = {
        error: null,
        isLoaded: false,
        homes: [],
        nombreCommentaire: false,
        dataCommentaire: '',
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

    render(){

        const { error, isLoaded, homes } = this.state
                    
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
                        { 
                            homes.map(home => <SingleArticle
                                key={home.post_id}
                                titre={home.titre} 
                                article={home.article}
                                date={home.date}
                                />
                            )
                        }

                        {
                            homes.map(home => <PostCommentaire 
                                post_id={home.post_id}
                                />
                            )
                        }

                        {
                            homes.map(home => <Commentaires
                                post_id={home.post_id}
                                comments={home.comments}
                                />
                            )
                        }     
                    </Fragment>
                )
        }
    }
}

export default Body