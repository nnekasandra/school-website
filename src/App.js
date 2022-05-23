import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Blogpg from "./pages/blog-page";
import Courses from "./pages/courses";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog-page" element={<Blogpg/>}/>
        <Route path="/courses" element={<Courses/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
/**
 * 
 <BrowserRouter>
    <Views/>
    </BrowserRouter>
 */
