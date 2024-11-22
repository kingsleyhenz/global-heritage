import { Link, Route, Router, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/home";
import NavigationBar from "./components/navigation";
import Footer from "./components/footer"
import Ticker from "./components/ticker"
import Contact from "./pages/contact";
import FeedBack from "./pages/feedback";
import Gallery from "./pages/gallery";
import Monuments from "./pages/monuments";

function App() {
  return (
    <>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/feedback" element={<FeedBack/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/monuments" element={<Monuments/>}/>
        </Routes>
        <Footer/>
        <Ticker/>
    </>
  )
}

export default App
