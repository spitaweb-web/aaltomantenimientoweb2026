import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './aalto-final.css'
import App from './AppFixed.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
