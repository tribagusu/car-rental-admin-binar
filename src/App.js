import { Route, Routes, Navigate } from "react-router-dom"

// pages
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Cars from "./pages/Cars/Cars"
import AddCar from "./pages/Cars/AddCar"

//comp
import Layout from "./layouts"

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cars" element={<Cars />}>
          <Route path="add-car" element={<AddCar />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </>
  )
}

export default App
