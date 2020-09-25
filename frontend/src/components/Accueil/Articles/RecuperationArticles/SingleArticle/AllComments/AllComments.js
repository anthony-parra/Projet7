import React, { Component, Fragment } from 'react'
import '../../../../articles.module.css'

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
                            <p className='allComments' key={comment.id}>{comment.commentaire}</p>
                        )
                            :
                        <Fragment />
                    }
                </Fragment>                       
            )
        }
      }

export default AllComments