import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './main.css'
import { ThemeProvider } from './context/themeProvider'
import { ProductProvider } from './context/productsProvider'
import { ChartProvider } from './context/chartProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ProductProvider>
          <ChartProvider>
            <App />
          </ChartProvider>
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
