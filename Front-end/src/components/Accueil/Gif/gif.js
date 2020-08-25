import React, { Fragment } from 'react'
import ImageGif from '../../../images/tenor.gif'
import '../Gif/gif.css'

const Gif = () => {
    return(
        
        <Fragment>
            <figure id='image_gif'>
                <img src={ImageGif} alt='lien gif pour ajouter un gif'></img>
                <figcaption id='titre_gif'>Un gif ?</figcaption>
            </figure>
        </Fragment>
    )
}

export default Gif