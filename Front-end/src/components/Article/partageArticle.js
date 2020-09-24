import React, { Component, Fragment } from 'react'
import '../Article/article.css'

class PartageArticle extends Component {

    state = {
        partage: false,
    }

    handlePartage = (event) => {
        const id = event.currentTarget.id
        const origin = window.location.origin
        const url = `${origin}/article/${id}`
        localStorage.setItem('url', url)
        const partage = !this.state.partage
        this.setState({ partage })
    }

    handleCopied = () => {
        const url = document.querySelector('textarea.partage')
        url.select()
        document.execCommand('copy')
        alert('Le lien vient d\'être copié dans votre presse papier')
    }

    render(){

    const { partage } = this.state
    const { id } = this.props
    const url = localStorage.getItem('url')

        return(

            <Fragment>
                <button onClick={this.handlePartage} id={id}  className='boutonPartager'>Partager</button>
                {
                    partage ? 
                    <div className='blocPartage'>
                        <textarea defaultValue={url} className='partage'></textarea>
                        <button className='boutonPartageLien' onClick={this.handleCopied}>Copier le lien</button>
                    </div> : 
                    <Fragment />
                }
            </Fragment>
        )
    }
}

export default PartageArticle