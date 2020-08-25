import React, { Fragment } from 'react'
import Image from '../../../images/image_article.jpg'
import '../Article/article.css'

const Article = () => {
    return(
        
        <Fragment>

            <figure id='image_article'>
                <img src={ Image } alt='Article'></img>
                <figcaption>Un article ?</figcaption>
            </figure>

        </Fragment>
    )
}

export default Article