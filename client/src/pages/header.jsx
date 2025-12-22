import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header({ active }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Mind<span className="logo-highlight">Bloom</span></h1>
          <p className="logo-subtitle">
            Croissance • Équilibre • Inspiration
          </p>
        </div>

        <nav className="nav">
          <Link to="/" className={`nav-link ${active === 'home' ? 'active' : ''}`}>
            Accueil
          </Link>

          <Link
            to="/articles"
            className={`nav-link ${active === 'articles' ? 'active' : ''}`}
          >
            Articles
          </Link>
        </nav>

        <div className="header-actions">
          {user ? (
            <>
              <span className="author-name">👋 {user.fullName}</span>
              <button className="login-btn" onClick={handleLogout}>
                Déconnexion
              </button>
            </>
          ) : (
            <Link to="/login" className="login-btn">
              Connexion
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
