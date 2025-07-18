import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AllainPortfolio from './app/app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AllainPortfolio />
  </StrictMode>,
) 