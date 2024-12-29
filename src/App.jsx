import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./component/Navbar.jsx";
import FormAPISection from "./component/FormAPISection.jsx";
import FormIntegration from "./component/FormIntegration.jsx";
import Footer from "./component/Footer.jsx";
import BlogSection from "./component/BlogSection.jsx";
import BrandSection from "./component/BrandSection.jsx";
import SetupSection from "./component/SetupSection.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-6xl mx-auto">
        <Navbar/>
        <FormAPISection/>
        <FormIntegration/>
        <BrandSection/>
        <SetupSection/>
        <BlogSection/>
        <Footer/>
    </div>
  )
}

export default App
