import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import {Home, About, Projects, Code, DealerApp, FakeShop, CryptoApp, WeatherApp, BJGame, Website} from './pages/index'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        
        <Routes>
          <Route path='/3D-portfolio/' element={<Home/>} />
          <Route path='/3D-portfolio/About' element={<About/>} />
          <Route path='/3D-portfolio/Projects' element={<Projects/>} />
          <Route path='/3D-portfolio/Code' element={<Code/>} />
          <Route path='/3D-portfolio/projects/DealerApp' element={<DealerApp/>} />
          <Route path='/3D-portfolio/projects/FakeShop' element={<FakeShop/>} />
          <Route path='/3D-portfolio/projects/CryptoApp' element={<CryptoApp/>} />
          <Route path='/3D-portfolio/projects/WeatherApp' element={<WeatherApp/>} />
          <Route path='/3D-portfolio/projects/BJGame' element={<BJGame/>} />
          <Route path='/3D-portfolio/projects/Website' element={<Website/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App