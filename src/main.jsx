import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router'
import AuthProviter from './Auth/AuthProviter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviter>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviter>
  </StrictMode>,
)
