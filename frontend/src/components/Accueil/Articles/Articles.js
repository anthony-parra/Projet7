import React, { Component, Fragment } from 'react'
import '../articles.css'
import NewArticle from './NewArticle/NewArticle'
import RecuperationArticles from './RecuperationArticles/RecuperationArticles'


class Articles extends Component {

      render() {

            return (

                <Fragment>
                    <NewArticle />
                    <RecuperationArticles />
                </Fragment>
            )
        }
      }

export default Articles