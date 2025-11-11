
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
import Media from './Components/Media'
import TopFooter from './Components/TopFooter'
import MtnDetail from './Components/casedetails/MtnDetail'
import DigitalStrategy from './Components/servicedetails/DigitalStrategy'
import ExperienceDesign from './Components/servicedetails/ExperienceDesign'
import ContentProduction from './Components/servicedetails/ContentProduction'
import CreativeTechnology from './Components/servicedetails/CreativeTechnology'
import InnovationConsulting from './Components/servicedetails/InnovationConsulting'
import DataAnalytics from './Components/servicedetails/DataAnalytics'

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
          <Route path='/media' element={<Media />} />
          <Route path='/strategy' element={<DigitalStrategy />} />
          <Route path='/experience' element={<ExperienceDesign />} />
          <Route path='/production' element={<ContentProduction />} />
          <Route path='/creative' element={<CreativeTechnology />} />
          <Route path='/consulting' element={<InnovationConsulting />} />
          <Route path='/analytics' element={<DataAnalytics />} />

          <Route path='/mtndetail' element={<MtnDetail />} />

        </Routes>
        <TopFooter />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
