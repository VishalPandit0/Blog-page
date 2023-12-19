import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Pages/Navbar'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar/>

    <Outlet/>

    <Footer/>

    </>
  )
}

export default App
