import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Electronics from'./pages/Electronics.jsx'
import ElectronicsDetail from './pages/ElectronicsDetail.jsx';
import Navbar from './components/Header.jsx';
function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/electronics" element={<Electronics />}/>
        <Route path="/electronics/:slug" element={<ElectronicsDetail />}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
