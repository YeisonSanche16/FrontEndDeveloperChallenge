import React, { Component } from 'react'
import Menu from './components/Menu/menu.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.data = props.data
  }

  render () {
    return (
      <React.Fragment>
        <Menu name={this.data.categories[0]} />
      </React.Fragment>
    )
  }
}
