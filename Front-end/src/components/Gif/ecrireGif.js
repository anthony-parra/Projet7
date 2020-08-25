import React, { Component, Fragment } from 'react'
import Headers from '../Index/Headers/headers'
import FormulaireGif from '../Gif/formulaireGif'

class EcrireGif extends Component {
    render(){
        return(

            <Fragment>
                <Headers />
                <FormulaireGif />
            </Fragment>

        )
    }
}

export default EcrireGif