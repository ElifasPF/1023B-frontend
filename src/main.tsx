import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './main.css'
import Container from './Container.tsx'
import Header from './Header.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Container nome='Body'/>
  </StrictMode>,
)

