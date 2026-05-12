import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './aalto-final.css'
import './aalto-logos-clean.css'
import './aalto-interactions.css'
import './aalto-motion.css'
import './aalto-logo-fouc.css'
import './aalto-mobile-hero-air.css'
import './aalto-mobile-menu-polish.css'
import './aalto-icon-polish.css'
import './aalto-sector-backgrounds.css'
import './whatsapp-widget.ts'
import './contact-email-fix.ts'
import './local-client-logos.ts'
import './industry-popup.ts'
import './aalto-scroll-polish.ts'
import './aalto-final-behavior.ts'
import './mobile-sector-autoplay.ts'
import './mobile-header-controller.ts'
import App from './AppFixed.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
