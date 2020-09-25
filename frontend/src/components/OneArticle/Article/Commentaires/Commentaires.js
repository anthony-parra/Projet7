import React, { Component, Fragment } from 'react'
import '../../oneArticle.css'

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
                                <Fragment>
                                    <p post_id={post_id} className='blocCommentaireClicked'>=> {comment.commentaire}</p>
                                    <p className='date_heure'>Publié le par </p>
                               </Fragment>
                            )
                                :
                            <Fragment/>
                        }
                </Fragment>
            )
        }
      }

export default Commentaire