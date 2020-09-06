import React, {Component, Fragment} from 'react'
import HeadersPublic from './components/Index/Headers/headers-public'
import Public from './components/Accueil/public'


class App extends Component {

  render(){

    return(
      
      <Fragment>
          <HeadersPublic />
          <Public />
      </Fragment>
    )
  }
}
export default App

    