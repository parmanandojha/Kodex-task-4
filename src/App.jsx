import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [showLogin, setShowLogin] = useState(false) // false => show Register by default

  return (
    <div className="page">
      <div className="auth-card">
        <header className="auth-header">
          <h1 className="auth-title">
            {showLogin ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="auth-subtitle">
            {showLogin ? 'Sign in to your account' : 'Join us today'}
          </p>
        </header>

        {showLogin ? (
          <Login setToggle={setShowLogin} />
        ) : (
          <Register setToggle={setShowLogin} />
        )}
      </div>
    </div>
  )
}

export default App
