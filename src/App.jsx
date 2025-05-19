import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoDidatica from '/logog.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logoDidatica} className="logo" alt="Vite logo" />
        </a>
        <a href="http://globo.com" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Servidor Didatica Digital</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          versão {count}
        </button>
 
      </div>

      <p className='read-the-docs'>Desenvolvedor: Carlos José da Silva <br/>Resende RJ</p>
    </>
  )
}

export default App
