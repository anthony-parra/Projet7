import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'
//import '../Article/article.css'
import PartageArticle from '../partageArticle'
import CommentForm from './CommentForm/CommentForm'
import AllComments from './AllComments/AllComments'
import GoArticle from '../GoArticle'


class Single extends Component {

      sendComment = () => {

      }

      render() {

            let {id, titre, article, comments, post_id, date } = this.props
            let aaammjj = date.split('T')[0]
            let heureTest = date.split('T')[1]
            let heure = heureTest.split('.')[0]
            

            return (

                <div id={id} className='bloc_color' key={id} >
                    <div className='newArticle'>

                        <p id= "titreNewArticle">{titre}</p>
                        <p id='blocArticle'>{article}</p>
                        <p className='date_heure' >Publié le {aaammjj} à {heure} par </p>
                        <CommentForm postId={id} />
                    <div>
                        <PartageArticle id={id} />
                        <GoArticle id={id} />          
                    </div>
                    <AllComments comments={comments} postId={post_id} />
                    </div>
                </div>   
            )
        }
      }

export default Single