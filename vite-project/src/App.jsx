import { Routes, Route} from 'react-router-dom'
import { Home } from './Componentes/Home'
import { Contato } from './Componentes/Contato'
import { Footer } from './Componentes/Footer'
import { Header } from './Componentes/Header'
import { Historia } from './Componentes/Historia'
import { Missao } from './Componentes/Missao'
import { Produto } from './Componentes/Produto'
import './Styles.global.css'

function App() {

  return (
  
    <div>
    <Header />

    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/missao' element={<Missao />} />
    <Route path='/produto' element={<Produto />} />
    <Route path='/historia' element={<Historia />} />
    <Route path='/contato' element={<Contato />} />
    </Routes>

    <Footer />

    </div>

  
 
   
   
   
    
  )
}

export default App
