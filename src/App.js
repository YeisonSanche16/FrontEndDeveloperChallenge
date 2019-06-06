import React, { Component } from 'react'
import Header from './components/Header/header.js'
import Menu from './components/Menu/Menu.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.dataMenu = props.dataMenu
    this.dataHeader = props.dataHeader
  }

  render () {
    return (
      <React.Fragment>
        <Header dataHeader={this.dataHeader} />
        <Menu dataMenu={this.dataMenu} />
      </React.Fragment>
    )
  }
}
