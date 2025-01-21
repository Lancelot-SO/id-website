
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Blog from './Pages/Blog'
import CaseStudy from './Pages/CaseStudy'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import BlogDetail from './Components/BlogDetail'
import OnlineAdvertising from './Components/servicedetails/OnlineAdvertising'
import DigitalMarketing from './Components/servicedetails/DigitalMarketing'
import Media from './Components/Media'
import Strategy from './Components/servicedetails/Strategy'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path='/case studies' element={<CaseStudy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/advert' element={<OnlineAdvertising />} />
          <Route path='/digital' element={<DigitalMarketing />} />
          <Route path='/media' element={<Media />} />
          <Route path='/strategy' element={<Strategy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
