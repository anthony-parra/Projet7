import React, {Component, Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import HeadersPrivate from './components/Headers/HeadersPrivate'
import Body from './components/OneArticle/Body/Body'

class AppOneArticle extends Component {

  render(){

    const connect = localStorage.getItem('token')

    if(connect === null){
      return <Redirect to='/' />
    }

    return(
      
      <Fragment>
        <HeadersPrivate />
        <Body />  
      </Fragment>
    )
  }
}
export default AppOneArticle