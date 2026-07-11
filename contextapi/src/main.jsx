import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ThemeProvider from './context/themeProvider.jsx'
import ProductProvider from './context/ProductProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ThemeProvider>
  </StrictMode>,
)
