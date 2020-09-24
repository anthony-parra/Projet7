import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class GoArticle extends Component {

    state = {

        redirection: false,
    }

    handleClick = (event) => {
        const id = event.currentTarget.id
        localStorage.setItem('articleId', id)
        this.setState({ redirection: true })
    }

      render() {

            let { id } = this.props
            let { redirection } = this.state
            const idLink = localStorage.getItem('articleId')

            if(redirection){
                return <Redirect push to={`/article/${idLink}`} />
            }

            return (
                <div>
                    <button onClick={this.handleClick} id={id} className='boutonRedirection'>Allez sur l'article !</button>
                </div>                       
            )
        }
      }

export default GoArticle
