import React, { Fragment } from 'react'
import Header from '../../Headers/Headers'
import '../pagePublic.module.css'

const PageNonTrouve = () => (

    <Fragment>
        <Header />
        <div>
            <h2>Veuillez nous excuser mais la page que vous recherchez n'est pas disponible !</h2>
        </div>
    </Fragment>
)

export default PageNonTrouve