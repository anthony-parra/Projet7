import React, { Fragment } from 'react'
import ImageIndex from '../../../images/icon.svg'
import '../LogoPageAccueil/LogoIndex.css'


const LogoIndex = () => {
    return(

        <Fragment>
            <div><img className='image_index' src={ImageIndex} alt='Logo de connexion Groupomania' /></div>
        </Fragment>
    )
}

export default LogoIndex