import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from "./App"
import "./styles/bootstrap.min.css"
import "./styles/plugins.css"
import "./styles/style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
