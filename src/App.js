import { Route, Routes, Navigate } from "react-router-dom"

// pages
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import CarsPage from "./pages/Cars/CarsPage"
import AddCarPage from "./pages/Cars/AddCarPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="cars" element={<CarsPage />} />
        <Route path="cars/add-car" element={<AddCarPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </>
  )
}

export default App
