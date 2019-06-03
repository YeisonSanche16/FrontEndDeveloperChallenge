import React, { Component } from 'react'
import Header from './components/Header/header.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.dataMenu = props.dataMenu
    this.dataHeader = props.dataHeader
  }

  render () {
    return (
      <React.Fragment>
        <Header dataMenu={this.dataMenu} dataHeader={this.dataHeader} />
      </React.Fragment>
    )
  }
}
