import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

import Dashboard from "./pages/Dashboard.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App