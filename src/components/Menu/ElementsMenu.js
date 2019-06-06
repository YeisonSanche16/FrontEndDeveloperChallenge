import React, { Component } from 'react'

export default class ElementsMenu extends Component {
  constructor (props) {
    super(props)
    this.categories = this.props.dataMenu
    this.setState = this.props.setState
    this.setContainerSubItems = this.props.setContainerSubItems
    this.setSubItems = this.props.setSubItems
    this.setMenuItems = this.setMenuItems.bind(this)
  }

  setMenuItems () {
    return (
      this.categories.map((categories) =>
        <li className='nav-section__navigation-item' key={categories.id}>
          <a className='nav-section__navigation-link'>
            <span>{categories.name}</span>
          </a>
          {
            this.setState(categories) ? this.setContainerSubItems(categories.sublevels, this.setSubItems) : ''
          }
        </li>
      )
    )
  }

  render () {
    return (
      <ul className='nav-section__navigatiomn-wrapper'>
        {this.setMenuItems()}
      </ul>
    )
  }
}
