import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={<main>
        Main
      </main>} />
        
      </Routes>
      
      <footer>
        Footer
      </footer>

    </>
  )
}

export default App
