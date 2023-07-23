import React from 'react'
import ReactDOM from 'react-dom/client'
import TemperatureConverter from './TemperatureConverter'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemperatureConverter />
  </React.StrictMode>,
)
