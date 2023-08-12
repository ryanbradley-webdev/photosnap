import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './routes/home/Home'
import Stories from './routes/stories/Stories'
import Features from './routes/features/Features'
import Pricing from './routes/pricing/Pricing'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/stories' element={<Stories />} />

          <Route path='/features' element={<Features />} />

          <Route path='/pricing' element={<Pricing />} />
          
        </Routes>

      </main>
      
      <Footer />

    </>
  )
}

export default App
