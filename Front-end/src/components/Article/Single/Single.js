import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'
//import '../Article/article.css'
import PartageArticle from '../partageArticle'
import CommentForm from './CommentForm/CommentForm'
import AllComments from './AllComments/AllComments'


class Single extends Component {

      sendComment = () => {

      }

      render() {

            let {id, titre, article, comments,post_id } = this.props
            return (
                <div id={id} className='bloc_color' key={id} >
                    <div className='newArticle'>

                        <p id= "titreNewArticle">{titre}</p>
                        <p id='blocArticle'>{article}</p>
                        <CommentForm postId={id} />
                    <div>
                        <PartageArticle id={id} />
                        <button id={id} className='boutonRedirection'>Allez sur l'article !</button>          
                    </div>
                    <AllComments comments={comments} postId={post_id} />
                    </div>
                </div>   
            )
        }
      }

export default Single