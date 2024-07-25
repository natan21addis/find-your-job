import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* strictMode is wraper componenet that will check for potential problem in your app duprcatedd,unsaved life cycle methods ,lygacy context api  */}
    <App />
  </React.StrictMode>,
)
