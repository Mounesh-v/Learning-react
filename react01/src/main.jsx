import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import MoneyState from './Context/Context/MoneyState'

createRoot(document.getElementById('root')).render(
  <MoneyState>
    <App />
  </MoneyState>,
)
