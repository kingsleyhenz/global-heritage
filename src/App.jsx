import { Link, Route, Router, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/home";
import NavigationBar from "./components/navigation";
import Contact from "./pages/contact";

function App() {
  return (
    <>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default App
