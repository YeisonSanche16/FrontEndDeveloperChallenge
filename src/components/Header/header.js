import React, { Component } from 'react'
import HamburgerButton from './HamburgerButton.js'
import Logo from './Logo.js'
import MiniCar from './MiniCar.js'
import './header.scss'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.dataHeader = this.props.dataHeader
  }

  render () {
    return (
      <header className='page-header'>
        <div className='page-header__header-content'>
          <HamburgerButton />
          <Logo dataHeader={this.dataHeader} />
          <MiniCar dataHeader={this.dataHeader} />
        </div>
      </header>
    )
  }
}
