import React, {Component, Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import HeadersPrivate from './components/Headers/HeadersPrivate'
import BodyAccueil from './components/Accueil/Body/Body'

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