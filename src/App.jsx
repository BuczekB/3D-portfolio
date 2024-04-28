import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import {Home, About, Projects, Code, DealerApp, FakeShop, CryptoApp, WeatherApp, BJGame, Website} from './pages/index'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        
        <Routes>
          <Route path='/3D-portfolio/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Code' element={<Code/>} />
          <Route path='/projects/DealerApp' element={<DealerApp/>} />
          <Route path='/projects/FakeShop' element={<FakeShop/>} />
          <Route path='/projects/CryptoApp' element={<CryptoApp/>} />
          <Route path='/projects/WeatherApp' element={<WeatherApp/>} />
          <Route path='/projects/BJGame' element={<BJGame/>} />
          <Route path='/projects/Website' element={<Website/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App