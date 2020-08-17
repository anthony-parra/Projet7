import React, { Fragment } from 'react'
import Image from '../images/image_logo.svg'


const Logo = () => {
    return(
        <Fragment>
            <h1><img className='logo_groupomania' src={Image} alt='Logo de Groupomania'/></h1>
        </Fragment>
    )
}

export default Logo 