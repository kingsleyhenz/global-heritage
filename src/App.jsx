import { Link, Route, Router, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/home";
import NavigationBar from "./components/navigation";

function App() {
  return (
    <>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </>
  )
}

export default App
