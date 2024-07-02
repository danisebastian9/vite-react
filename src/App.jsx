/*

npm create vite@latest
To create the React App

*/

import Navbar from './components/Navbar'
import Main from './components/Main'
import reactLogo from './assets/react-icon-small.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  )
}

export default App

