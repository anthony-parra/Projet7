import React, { Component, Fragment } from 'react'
import '../../Article/article.css'

class SingleArticle extends Component {

      render() {
            
        let {post_id, titre, article, date } = this.props
        let aaammjj = date.split('T')[0]
        let heureTest = date.split('T')[1]
        let heure = heureTest.split('.')[0]

            return (

                <Fragment>
                    <h2>{titre}</h2>
                    <div key={post_id}>
                        <p className='articleClicked'>{article}</p>
                        <p className='date_heure' >Publié le {aaammjj} à {heure} par </p>
                    </div>
                </Fragment>
            )
        }
      }

export default SingleArticle