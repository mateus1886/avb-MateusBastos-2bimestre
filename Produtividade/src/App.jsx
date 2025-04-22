import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <Header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold">Meu Site</h1>
      </Header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 bg-gray-100">
        <Main />      
        </main>

      {/* Rodapé */}
      <Footer />
    </div>
    </>
  ) 

  
}



export default App