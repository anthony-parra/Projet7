import React, { Component } from 'react'

class AllComments extends Component {

      render() {

            let { comments, post_id } = this.props

            return (
                <div>
                    <input type="hidden" name="postId" value={post_id} />
                    {
                        comments.map(comment => 
                            <p className='allComments' key={comment.id}>{comment.commentaire}</p>
                        )
                    }
                </div>                       
            )
        }
      }

export default AllComments