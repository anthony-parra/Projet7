import React, { Component } from 'react'
import PartageArticle from './PartageArticle/PartageArticle'
import CommentForm from './CommentForm/CommentForm'
import AllComments from './AllComments/AllComments'
import GoArticle from './GoArticle/GoArticle'
import '../../../articles.css'


class SingleArticle extends Component {

      sendComment = () => {

      }

      render() {

            let {id, titre, article, comments, post_id, date, author } = this.props
            let aaammjj = date.split('T')[0]
            let heureTest = date.split('T')[1]
            let heure = heureTest.split('.')[0]

            return (

                <div id={id} className='bloc_color' key={id} >
                    <div className='newArticle'>

                        <p className= "titreNewArticle">{titre}</p>
                        <p className='blocArticle'>{article}</p>
                        
                        <p className='date_heure' >Publié le {aaammjj} à {heure} par {author.prenom} {author.nom} </p>
                        <CommentForm postId={id} />
                    <div>
                        <PartageArticle id={id} />
                        <GoArticle id={id} />
                        <AllComments comments={comments} postId={post_id} author={author}/>          
                    </div>
                    
                    </div>
                </div>   
            )
        }
      }

export default SingleArticle