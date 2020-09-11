import React, {Component, Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import HeadersPrivate from './components/Index/Headers/headers-private'
import BodyArticle from './components/Accueil/bodyArticle'



class AppArticle extends Component {

  render(){

    const connect = localStorage.getItem('token')

    if(connect === null){
      console.log(connect)
      return <Redirect to='/' />
    }

    return(
      
      <Fragment>
        <HeadersPrivate />
        <BodyArticle />  
      </Fragment>
    )
  }
}
export default AppArticle