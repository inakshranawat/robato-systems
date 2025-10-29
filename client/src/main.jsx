import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContextProvider.jsx'
import { HelmetProvider } from '@dr.pogodin/react-helmet'   // ✅ Import HelmetProvider

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider> {/* ✅ Wrap everything inside HelmetProvider */}
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </HelmetProvider>
  </BrowserRouter>
)
