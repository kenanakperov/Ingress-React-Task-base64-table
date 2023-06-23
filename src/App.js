import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Home />} />
      <Route path="/user-data" element={<Login/>} />
    </Routes>
  )
}
export default App;
