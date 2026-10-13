import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider} from 'react-router'
import './assets/css/index.css'
import router from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
