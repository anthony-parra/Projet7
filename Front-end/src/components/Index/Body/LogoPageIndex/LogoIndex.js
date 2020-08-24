import React, { Fragment } from 'react'
import ImageIndex from '../../../../images/icon.svg'
import '../LogoPageIndex/LogoIndex.css'


const LogoIndex = () => {
    return(

        <Fragment>
            <div><img className='image_index' src={ImageIndex} alt='Logo de connexion Groupomania' /></div>
        </Fragment>
    )
}

export default LogoIndex