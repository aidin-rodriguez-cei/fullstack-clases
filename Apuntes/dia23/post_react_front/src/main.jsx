import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { RouterProvider } from 'react-router-dom' 
import router from './lib/routes/router' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
