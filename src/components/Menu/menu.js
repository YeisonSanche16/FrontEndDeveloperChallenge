import React, { Component } from 'react'
import './menu.scss'

export default class Menu extends Component {
  constructor (props) {
    super(props)
    this.shellMenu()
  }

  shellMenu () {
    console.log('get started')
  }

  render () {
    return <h1 className='containermenu'>{`hola ${this.props.name.name}`}</h1>
  }
}
