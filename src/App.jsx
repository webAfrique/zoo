//import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/menu'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Menu/>
      </main>
      <Footer/>
    </>
  )
}

export default App