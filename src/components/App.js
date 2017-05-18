import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { AppBar} from 'material-ui'
import SearchBar from './../containers/SearchBar'

const container_style = {
  fontFamily: "'Roboto', sans-serif"
}

const titleString = 'Github best repositories'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div style={container_style}>
          <AppBar title={titleString} showMenuIconButton={false}  />
          <SearchBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
