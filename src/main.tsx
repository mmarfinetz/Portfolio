import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

console.log('main.tsx loaded');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
  console.log('React app rendered');
} else {
  console.error('Root element not found!');
}