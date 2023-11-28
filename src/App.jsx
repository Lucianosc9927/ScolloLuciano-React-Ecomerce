import './App.css'
import {Navbar} from './components/Navbar.jsx'
import {Logo} from './components/Logo.jsx'
import {ItemListContainer} from './components/ItemListContainer.jsx'

function App() {

  return (
    <>
      <header className='header'>
        <Logo />
        <Navbar />
      </header>
      <body>
        <ItemListContainer />
      </body>
    </>
  )
}

export default App
