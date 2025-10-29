import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import Teena from './Teena.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    
    <Teena />
  </StrictMode>,
)
