import Navbar from './components/Navbar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='containerGroup'>
      <Header/>
      <Dashboard/>
      </div>
    </div>
  )
}

export default App
