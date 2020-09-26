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
                        comments.map((comment, index) =>
                            
                            <Fragment key={'comment' + index}>
                                <p className='date_heure'>Publié le {comment.date.split('T')[0]} à {comment.date.split('T')[1].split('.')[0]}</p>
                                <p className='allComments' key={comment.id}>{comment.commentaire}</p> 
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