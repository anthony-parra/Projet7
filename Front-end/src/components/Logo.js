import React, { Fragment } from 'react'
import Image from '../images/image_logo.svg'


const Logo = () => {
    return(
        <Fragment>
            <h1><a href='/'><img className='logo_groupomania' src={Image} alt='Logo de Groupomania'/></a></h1>
        </Fragment>
    )
}

export default Logo 