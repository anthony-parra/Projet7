import React, { Fragment } from 'react'
import ImageIndex from './Images/icon.svg'
import '../../pagePublic.module.css'


const LogoIndex = () => {
    return(

        <Fragment>
            <div><img className='image_index' src={ImageIndex} alt='Logo de connexion Groupomania' /></div>
        </Fragment>
    )
}

export default LogoIndex