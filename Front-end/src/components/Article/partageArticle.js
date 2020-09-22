import React, { Component, Fragment } from 'react'
import '../Article/article.css'

class PartageArticle extends Component {

    state = {
        partage: false,
    }

    handlePartage = () => {
        const url = new URL(window.location).href
        localStorage.setItem('urlCopie', url)
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

    const url = localStorage.getItem('urlCopie')
    const { partage } = this.state

        return(

            <Fragment>
                <button onClick={this.handlePartage}  className='boutonPartager'>Partager</button>
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