import React, { Component } from 'react'
import ElementsMenu from './ElementsMenu.js'

export default class Menu extends Component {
  constructor (props) {
    super(props)
    this.dataMenu = this.props.dataMenu.categories
    this.setState = this.setState.bind(this)
    this.setContainerSubItems = this.setContainerSubItems.bind(this)
    this.setSubItems = this.setSubItems.bind(this)
    this.state = {
      hasSublevel: false
    }
  }

  setState (categories) {
    this.state.hasSublevel = false
    this.state.hasSublevel = categories.hasOwnProperty('sublevels') ? !this.state.hasSublevel : this.state.hasSublevel
    return this.state.hasSublevel
  }

  setContainerSubItems (sublevel, callback) {
    return (
      <ul>
        {
          sublevel.map((sublevelItem) =>
            callback(sublevelItem)
          )
        }
      </ul>
    )
  }

  setSubItems (sublevelItem) {
    return (
      <li className='nav-section__navigation-item' key={sublevelItem.id}>
        <a className='nav-section__navigation-link'>
          <span>{sublevelItem.name}</span>
        </a>
        {
          this.setState(sublevelItem) ? this.setContainerSubItems(sublevelItem.sublevels, this.setSubItems) : ''
        }
      </li>
    )
  }

  render () {
    return (
      <div className='nav-section'>
        <div className='nav-section__nav-container'>
          <nav className='nav-section__wrapper-navigation'>
            <ElementsMenu
              setState={this.setState}
              dataMenu={this.dataMenu}
              setContainerSubItems={this.setContainerSubItems}
              setSubItems={this.setSubItems}
            />
          </nav>
        </div>
      </div>
    )
  }
}
