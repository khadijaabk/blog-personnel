import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [darkMode, setDarkMode] = useState(true)
  
  // Catégories de vie & bien-être
  const categories = [
    { 
      name: 'Santé & Bien-être', 
      icon: '💚', 
      count: 19,
      description: 'Corps sain, esprit serein'
    },
    { 
      name: 'Voyage & Aventure', 
      icon: '✈️', 
      count: 16,
      description: 'Exploration et découvertes du monde'
    },
    { 
      name: 'Culture & Savoir', 
      icon: '📚', 
      count: 21,
      description: 'Livres, cinéma, musique et connaissances'
    },
    { 
      name: 'Sport & Activité Physique', 
      icon: '🏃‍♀️', 
      count: 17,
      description: 'Énergie, vitalité et défis personnels'
    },
  ]

  // SEULEMENT 2 ARTICLES RÉCENTS
  const articles = [
    {
      id: 1,
      title: 'Le Pouvoir des Petits Rituels Quotidiens',
      category: 'Bonheur Quotidien',
      excerpt: 'Comment de simples habitudes matinales peuvent transformer votre journée et augmenter votre niveau de bonheur.',
      author: 'Claire Sérénité',
      date: 'Hier',
      readTime: '6 min',
      likes: 245,
      comments: 42,
      tags: ['Routine', 'Bien-être', 'Habitudes']
    },
    {
      id: 2,
      title: 'L\'Art de Cultiver des Amitiés Authentiques',
      category: 'Relations Humaines',
      excerpt: 'Dans un monde hyper-connecté, découvrez comment construire et entretenir des relations profondes et significatives.',
      author: 'Thomas Connect',
      date: 'Il y a 2 jours',
      readTime: '8 min',
      likes: 189,
      comments: 35,
      tags: ['Amitié', 'Connexion', 'Relations']
    }
  ]

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      
      {/* ===== HEADER SIMPLE ===== */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>Mind<span className="logo-highlight">Bloom</span></h1>
            <p className="logo-subtitle">Croissance • Équilibre • Inspiration</p>
          </div>

          <nav className="nav">
            <Link to="/" className="nav-link active">Accueil</Link>
            <Link to="/articles" className="nav-link">Articles</Link>
            <Link to="/categories" className="nav-link">Catégories</Link>
            <Link to="/about" className="nav-link">À propos</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="header-actions">
            <Link to="/login" className="login-btn">Connexion</Link>
            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION CENTRÉE ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenue dans l'Art de <span className="hero-highlight">Vivre Mieux</span>
          </h1>
          <p className="hero-description">
            Explorez des récits inspirants, des conseils pratiques et des moments de joie 
            pour cultiver le bonheur dans votre vie quotidienne.
          </p>
          <div className="hero-buttons">
            <Link to="/articles" className="cta-primary">Explorer les Articles</Link>
            <button className="cta-secondary">Commencer à Apprendre</button>
          </div>
        </div>
      </section>

      {/* ===== CONTENU PRINCIPAL ===== */}
      <main className="main-content">
        
        {/* SECTION ARTICLES RÉCENTS (SEULEMENT 2) */}
        <section className="recent-articles">
          <div className="section-header">
            <h2>📝 Articles Récents</h2>
            <p>Découvrez les derniers récits inspirants</p>
          </div>

          <div className="articles-grid">
            {articles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-header">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-footer">
                  <div className="article-author">
                    <span className="author-name">Par {article.author}</span>
                    <span className="read-time">{article.readTime} de lecture</span>
                  </div>
                  <div className="article-stats">
                    <span className="stat">❤️ {article.likes}</span>
                    <span className="stat">💬 {article.comments}</span>
                  </div>
                </div>
                <div className="article-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION CATÉGORIES */}
        <section className="categories-section">
          <div className="section-header">
            <h2>📂 Catégories Populaires</h2>
            <p>Explorez par domaine d'intérêt</p>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-count">{category.count} articles</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION NEWSLETTER */}
        <section className="newsletter-section">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h3>💌 Restez Informé</h3>
              <p>Recevez les derniers articles et inspirations directement dans votre boîte mail</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Votre adresse email" />
                <button className="subscribe-btn">S'abonner</button>
              </div>
              <small>Pas de spam. Désabonnez-vous à tout moment.</small>
            </div>
          </div>
        </section>

      </main>

      {/* ===== FOOTER SIMPLE ===== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Mind<span className="logo-highlight">Bloom</span></h3>
              <p>Épanouissement personnel au quotidien</p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Contenu</h4>
                <Link to="/articles">Articles</Link>
                <Link to="/inspirations">Inspirations</Link>
                <Link to="/guides">Guides</Link>
                <Link to="/ressources">Ressources</Link>
              </div>
              
              <div className="link-group">
                <h4>Communauté</h4>
                <Link to="/forum">Forum</Link>
                <Link to="/ateliers">Ateliers</Link>
                <Link to="/témoignages">Témoignages</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 MindBloom. Tous droits réservés.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
  
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
  
              <a href="mailto:contact@mindbloom.com" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home