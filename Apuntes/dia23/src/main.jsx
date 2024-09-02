import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'


import { RouterProvider } from 'react-router'
import { Router } from './lib/routes/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
