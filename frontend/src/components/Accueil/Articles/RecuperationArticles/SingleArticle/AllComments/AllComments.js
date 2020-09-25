import React, { Component, Fragment } from 'react'
import '../../../../articles.css'

class AllComments extends Component {

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
                    <input type="hidden" name="postId" value={post_id} />
                    {
                        commentaire
                            ?
                        comments.map(comment =>
                            <Fragment> 
                                <p className='allComments' key={comment.id}>{comment.commentaire}</p>
                                <p className='date_heure'>Publié le  à  par </p>
                                 
                            </Fragment>
                        )
                            :
                        <Fragment />
                    }
                </Fragment>                       
            )
        }
      }

export default AllComments