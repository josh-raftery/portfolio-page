import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './Components/AboutMe'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='h-[100vh] relative' >
      <Nav/>
      <Routes>
        <Route path = '/' element = {<AboutMe/>}/>
        <Route path = '/projects' element = {<Projects/>}/>
        <Route path = '/resume' element = {<Resume/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
