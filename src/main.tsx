import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
