import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/home';
import Contact from './components/pages/contact/contact';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
      </Routes>
    </>
  )
}

export default App
