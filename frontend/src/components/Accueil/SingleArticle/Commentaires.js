import React, { Component, Fragment } from 'react'
import '../../Article/article.css'

class Commentaire extends Component {

    state = {
        commentaire: false,
    }

    handleClickCommentaire = () => {
        const commentaire = !this.state.commentaire
        this.setState({ commentaire })
    }

      render() {

        let { comments, post_id } = this.props
        let { commentaire } = this.state

            return (

                <Fragment>
                    <button onClick= {this.handleClickCommentaire} id='commentaireArticleClickedPost'>{comments.length} commentaires</button>
                        <input type='hidden' value={post_id}/>
                        {
                            commentaire 
                                ?
                            comments.map(comment => 
                               <p post_id={post_id} className='blocCommentaireClicked'>=> {comment.commentaire}</p> 
                            )
                                :
                            <Fragment/>
                        }
                </Fragment>
            )
        }
      }

export default Commentaire