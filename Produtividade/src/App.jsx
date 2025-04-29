import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
        <AppRoutes/>
    </div>
    </>
  ) 

  
}



export default App