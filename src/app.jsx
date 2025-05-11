import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Teams from './pages/Teams'
import News from './pages/News'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/gallery" element={
          <Layout>
            <Gallery />
          </Layout>
        } />
        <Route path="/teams" element={
          <Layout>
            <Teams />
          </Layout>
        } />
        <Route path="/news" element={
          <Layout>
            <News />
          </Layout>
        } />
        <Route path="/contract" element={
          <Layout>
            <Contact />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <NotFound />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App