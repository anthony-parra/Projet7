import React, { Fragment } from 'react'
import Image from './Image/image_logo.png'
import './headers.css'


const Headers = () => {
    return(
        <Fragment>
            <header>
                <h1><a href='/'><img className='logo_groupomania' src={Image} alt='Logo de Groupomania'/></a></h1>
            </header>
        </Fragment>
    )
}

export default Headers
 