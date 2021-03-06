import React, { Component, Fragment } from 'react'
import '../../../oneArticle.css'

class SingleArticle extends Component {

      render() {
            
        let {post_id, titre, article, date, author } = this.props
        let aaammjj = date.split('T')[0]
        let heureTest = date.split('T')[1]
        let heure = heureTest.split('.')[0]

            return (

                <Fragment>
                    <h2>{titre}</h2>
                    <div key={post_id}>
                        <p className='articleClicked'>{article}</p>
                        <p className='date_heure' >Publié le {aaammjj} à {heure} par {author.prenom} {author.nom} </p>
                    </div>
                </Fragment>
            )
        }
      }

export default SingleArticle