import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

/*
<Route path="/" element={<Pages.Home />} />
<Route path="about" element={<Pages.About />} />
*/
