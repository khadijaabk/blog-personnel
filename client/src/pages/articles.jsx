import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Articles() {
  const [darkMode, setDarkMode] = useState(true)
  const [showEditor, setShowEditor] = useState(false)
  const [editId, setEditId] = useState(null)

  const [articles, setArticles] = useState([])

  const [form, setForm] = useState({
    title: '',
    category: '',
    content: '',
    tags: ''
  })
  const [user, setUser] = useState(null)
  useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  if (storedUser) {
    setUser(storedUser)
  }
  }, [])


  /* ===== CHARGEMENT LOCALSTORAGE ===== */
  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem('articles'))
    if (storedArticles && storedArticles.length > 0) {
      setArticles(storedArticles)
    } else {
      setArticles([
        {
          id: 1,
          title: 'Le Pouvoir des Petits Rituels Quotidiens',
          category: 'Bien-être',
          content: 'Les petits rituels quotidiens sont des graines invisibles...',
          excerpt: 'Les petits rituels quotidiens sont des graines invisibles...',
          author: 'Claire Sérénité',
          tags: ['Routine', 'Bien-être'],
          likes: 245
        }
      ])
    }
  }, [])

  /* ===== SAUVEGARDE ===== */
  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles))
  }, [articles])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  /* ===== AJOUT / MODIFICATION ===== */
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editId) {
      setArticles(
        articles.map(article =>
          article.id === editId
            ? {
                ...article,
                title: form.title,
                category: form.category,
                content: form.content,
                excerpt: form.content.substring(0, 120) + '...',
                tags: form.tags.split(',').map(t => t.trim())
              }
            : article
        )
      )
    } else {
      const newArticle = {
        id: Date.now(),
        title: form.title,
        category: form.category,
        content: form.content,
        excerpt: form.content.substring(0, 120) + '...',
        author: 'Auteur MindBloom',
        tags: form.tags.split(',').map(t => t.trim()),
        likes: 0
      }

      setArticles([newArticle, ...articles])
    }

    setForm({ title: '', category: '', content: '', tags: '' })
    setEditId(null)
    setShowEditor(false)
  }

  const handleEdit = (article) => {
    setForm({
      title: article.title,
      category: article.category,
      content: article.content,
      tags: article.tags.join(', ')
    })
    setEditId(article.id)
    setShowEditor(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Supprimer cet article ?')) {
      setArticles(articles.filter(article => article.id !== id))
    }
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>

      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>Mind<span className="logo-highlight">Bloom</span></h1>
            <p className="logo-subtitle">Croissance • Équilibre • Inspiration</p>
          </div>

          <nav className="nav">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/articles" className="nav-link active">Articles</Link>
          </nav>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="main-content">

        <div className="section-header">
          <h2>📝 Articles</h2>
          <p>Rédaction et gestion des articles</p>

          <button
            className="cta-primary"
            style={{ marginTop: '1.5rem' }}
            onClick={() => {
              setShowEditor(!showEditor)
              setEditId(null)
              setForm({ title: '', category: '', content: '', tags: '' })
            }}
          >
            ✍️ Rédiger un article
          </button>
        </div>

        {/* ===== FORMULAIRE ===== */}
        {showEditor && (
          <form className="page-container" onSubmit={handleSubmit}>
            <h2>{editId ? 'Modifier l’article' : 'Nouvel article'}</h2>

            <input
              type="text"
              name="title"
              placeholder="Titre"
              value={form.title}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Catégorie"
              value={form.category}
              onChange={handleChange}
              required
            />

            <textarea
              name="content"
              placeholder="Contenu de l'article"
              rows="6"
              value={form.content}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="tags"
              placeholder="Tags (séparés par des virgules)"
              value={form.tags}
              onChange={handleChange}
            />

            <button type="submit" className="cta-primary">
              💾 Enregistrer
            </button>
          </form>
        )}

        {/* ===== LISTE ===== */}
        <section className="articles-grid">
          {articles.map(article => (
            <article key={article.id} className="article-card">
              <span className="article-category">{article.category}</span>

              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>

              <div className="article-tags">
                {article.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>

              <div className="article-footer">
                <span className="author-name">Par {article.author}</span>
                {user && user.id === article.authorId && (
              <div className="article-stats">
                <button onClick={() => handleEdit(article)}>✏️</button>
                <button onClick={() => handleDelete(article.id)}>🗑️</button>
              </div>
            )}

              </div>
            </article>
          ))}
        </section>

      </main>
    </div>
  )
}

export default Articles
