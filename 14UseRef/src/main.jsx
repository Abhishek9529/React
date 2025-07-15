import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex1 from './Ex1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Ex1/> */}
  </StrictMode>,
)
