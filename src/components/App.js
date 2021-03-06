import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin';


const container_style = {
  fontFamily: "'Roboto', sans-serif"
}

const titleString = 'Github best repositories'

/**
 * Material UI requirement
 * Needed for onTouchTap
 * more info - http://stackoverflow.com/a/34015469/988941
 */
injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div style={container_style}>
          <AppBar title={titleString} showMenuIconButton={false}/>
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
