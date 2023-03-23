import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import TodoPage from './pages/TodoPage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      {!isLoggedIn && (
        <LoginPage setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout} />
      )}
      {isLoggedIn && <TodoPage handleLogout={handleLogout} />}
    </div>
  )
}

export default App
