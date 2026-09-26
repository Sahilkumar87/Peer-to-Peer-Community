import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">SkillExchange</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register" className="nav-btn">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">PEER TO PEER LEARNING</p>

          <h1>
            Learn Skills.
            <br />
            <span>Share Knowledge.</span>
          </h1>

          <p className="hero-text">
            Connect with fellow students, exchange skills, and find the
            right learning partner from your college community.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started
            </Link>

            <Link to="/select-test" className="secondary-btn">
              Test
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="skill-card">
            <h3>🤝 Skill Exchange</h3>
            <p>Find students who can teach what you want to learn.</p>

            <div className="skill-row">
              <span>Rahul</span>
              <b>DSA</b>
            </div>

            <div className="exchange">↕</div>

            <div className="skill-row">
              <span>Aman</span>
              <b>React</b>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Everything You Need for Peer Learning</h2>
        <p className="section-text">
          Learn, teach and collaborate with students in one place.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="icon">🎯</div>
            <h3>Find Learning Partners</h3>
            <p>
              Discover students who can teach the skills you want to learn.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">📅</div>
            <h3>Plan Sessions</h3>
            <p>
              Create and manage learning sessions with your peer partners.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">📚</div>
            <h3>Share Resources</h3>
            <p>
              Share notes, useful links and study materials with your partner.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">⭐</div>
            <h3>Reviews & Badges</h3>
            <p>
              Give feedback and earn badges after completing sessions.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Start Learning?</h2>
        <p>Join your college peer learning community today.</p>

        <Link to="/register" className="primary-btn">
          Create Your Profile
        </Link>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 SkillExchange | Peer-to-Peer Community Learning Platform</p>
      </footer>

    </div>
  );
}

export default Home;