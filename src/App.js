import { Route, Routes, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="dashboard" replace />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
