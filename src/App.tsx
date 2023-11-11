import './App.css';
import { Header } from '@/components/ui/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Agenda } from '@/Pages/Agenda';
import { Contact } from '@/Pages/Contact';
import { Sponsors } from '@/Pages/Sponsors';
import { Home } from '@/Pages/Home';
function App() {

  return (
    <BrowserRouter>
    <div className='app min-h-screen'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='agenda' element={<Agenda />}/>
      <Route path='contact-us' element={<Contact />}/>
      <Route path='sponsors' element={<Sponsors />}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
