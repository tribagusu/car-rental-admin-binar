import { Route, Routes, Navigate } from "react-router-dom"

// pages
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import CarsPage from "./pages/Cars/CarsPage"
import AddCarPage from "./pages/Cars/AddCarPage"
import EditCarPage from "./pages/Cars/EditCarPage"
import Layout from "./layouts"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="cars" element={<CarsPage />} />
        <Route path="cars/add-car" element={<AddCarPage />} />
        <Route path="cars/edit-car/:id" element={<EditCarPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
