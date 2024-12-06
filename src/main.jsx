import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import Feed from './components/Feed.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>} >
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/feed" element={<Feed></Feed>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >
)
