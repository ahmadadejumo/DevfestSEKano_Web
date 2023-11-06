import './App.css';
import { Header } from '@/components/ui/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '@/Pages/About';
import { Contact } from '@/Pages/Contact';
import { Price } from '@/Pages/Price';
import { Home } from '@/Pages/Home';
function App() {

  return (
    <BrowserRouter>
    <div className='app min-h-screen'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about-us' element={<About />}/>
      <Route path='contact-us' element={<Contact />}/>
      <Route path='price' element={<Price />}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
