import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App1 from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App1 />
  </StrictMode>,
)
