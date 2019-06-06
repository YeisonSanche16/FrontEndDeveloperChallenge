import React, { Component } from 'react'

export default class HamburgerButton extends Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    const clickedElement = event.target.closest('.page-header__btn-Container')
    if (clickedElement !== null) {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }))
    }
  }

  render () {
    const toggleFlag = this.state.isToggleOn ? 'page-header__btnHamburger--pressed' : ''
    return (
      <div onClick={this.handleClick} className='page-header__btn-Container' >
        <button className={`page-header__btnHamburger ${toggleFlag}`}>
          <span className='page-header__btnHamburger-line page-header__btnHamburger-line--top' />
          <span className='page-header__btnHamburger-line page-header__btnHamburger-line--bottom' />
        </button>
      </div>
    )
  }
}
