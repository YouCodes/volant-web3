import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Footer, Loader, Navbar, Services, Transactions, Welcome } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
