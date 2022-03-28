import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

// mount the App in the DOM -- I need ReactDOM for this

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
