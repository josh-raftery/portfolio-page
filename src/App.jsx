import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './Components/AboutMe'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <div className='h-[100vh] relative' >
      <ScrollToTop />
      <Nav/>
      <Routes>
        <Route path = '/' element = {<AboutMe/>}/>
        <Route path = '/projects' element = {<Projects/>}/>
        <Route path = '/resume' element = {<Resume/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
