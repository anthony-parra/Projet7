import React, {Component, Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import HeadersPrivate from './components/Index/Headers/headers-private'
import BodyAccueil from './components/Accueil/bodyAccueil'

class AppAccueil extends Component {

  render(){

    const connect = localStorage.getItem('token')

    if(connect === null){
      return <Redirect to='/' />
    }

    return(
      
      <Fragment>
        <HeadersPrivate />
        <BodyAccueil />  
      </Fragment>
    )
  }
}
export default AppAccueil