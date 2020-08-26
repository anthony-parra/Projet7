import React, {Component, Fragment} from 'react'
import Headers from './components/Index/Headers/headers.js'
import Body from './components/Index/Body/body'


class App extends Component {
  render(){
    return(
      
      <Fragment>
          <Headers />
          <Body />   
      </Fragment>
    )
  }
}
export default App

    