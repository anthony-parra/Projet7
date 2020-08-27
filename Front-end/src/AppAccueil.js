import React, {Component, Fragment} from 'react'
import Headers from './components/Index/Headers/headers.js'
import BodyAccueil from './components/Accueil/bodyAccueil'



class AppAccueil extends Component {

  render(){

    return(
      
      <Fragment>
        <Headers />
        <BodyAccueil />  
      </Fragment>
    )
  }
}
export default AppAccueil