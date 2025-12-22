import { useNavigate } from 'react-router-dom'
///Just for test
function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    // Login simulé
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: 1,
        fullName: 'Marwa Sayad'
      })
    )

    navigate('/articles')
  }

  return (
    <div className="page-container">
      <h2>Connexion</h2>
      <button className="cta-primary" onClick={handleLogin}>
        Se connecter
      </button>
    </div>
  )
}

export default Login
