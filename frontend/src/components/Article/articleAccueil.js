import React, { Component, Fragment } from 'react'
//import { Redirect } from 'react-router-dom'
import './article.css'
import NewArticle from './newArticle'
import RecuperationArticles from './recuperationArticles'
//import NewComments from './newComments'


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