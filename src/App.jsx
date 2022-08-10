import React, { useState } from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Portofolio from './component/portofolio/portofolio'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
const [apa, setApa] = useState('Assalammualaikum')
const [salam, setSalam] = useState('')
const [job, setJob] = useState('')

const datas = {
  apa, setApa, job, setJob, salam, setSalam
}

  return (
    <Router>
    < >
      <Nav />
      <Routes>
        <Route exact path='/'element={<Header datas={datas}/>}/>
        <Route exact path='/about'element={<About />}/>
        <Route exact path='/experience'element={<Experience />}/>
        <Route exact path='/portofolio'element={<Portofolio />}/>
        <Route exact path='/contact'element={<Contact />}/>
      </Routes>
      <Footer />
    </>
    </Router>
  )
}

export default App