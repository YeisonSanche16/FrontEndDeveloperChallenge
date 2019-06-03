import './main.scss'

import React from 'react'
import { render } from 'react-dom'

import App from './App'
import dataMenu from './data/dataMenu.json'
import dataHeader from './data/dataHeader.json'

const app = document.querySelector('#app')
render(<App dataMenu={dataMenu} dataHeader={dataHeader} />, app)
