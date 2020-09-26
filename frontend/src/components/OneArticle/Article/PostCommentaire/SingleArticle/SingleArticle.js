import React, { Component, Fragment } from 'react'
import '../../../oneArticle.css'

class SingleArticle extends Component {

      render() {
            
        let {post_id, titre, article } = this.props

            return (

                <Fragment>
                    <h2>{titre}</h2>
                    <div key={post_id}>
                        <p className='articleClicked'>{article}</p>
                    </div>
                </Fragment>
            )
        }
      }

export default SingleArticle