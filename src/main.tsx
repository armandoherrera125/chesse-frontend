import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import { ChesseApp } from './ChesseApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChesseApp />
  </StrictMode>,
)
