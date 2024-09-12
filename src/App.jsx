import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './Components/AboutMe'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Resume from './Components/Resume'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path = '/' element = {<AboutMe/>}/>
        <Route path = '/projects' element = {<Projects/>}/>
        <Route path = '/resume' element = {<Resume/>}/>
      </Routes>
    </>
  )
}

export default App
