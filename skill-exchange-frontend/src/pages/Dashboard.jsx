import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Navbar */}
      <nav className="dashboard-nav">
        <div className="logo">SkillExchange</div>

        <div className="dashboard-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      {/* Main */}
      <main className="dashboard-main">

        <div className="welcome">
          <div>
            <p className="small-title">STUDENT DASHBOARD</p>
            <h1>Welcome, Student 👋</h1>
            <p>
              Find learning partners, exchange skills and manage your sessions.
            </p>
          </div>

          <Link to="/profile" className="primary-btn">
            Edit Profile
          </Link>
        </div>

        {/* Skill Cards */}
        <section className="dashboard-section">

          <h2>Your Skills</h2>

          <div className="skill-dashboard-grid">

            <div className="dashboard-card">
              <span className="dashboard-icon">🎓</span>
              <h3>Skills I Can Teach</h3>

              <div className="tags">
                <span>DSA</span>
                <span>Java</span>
                <span>Video Editing</span>
              </div>
            </div>

            <div className="dashboard-card">
              <span className="dashboard-icon">📚</span>
              <h3>Skills I Want to Learn</h3>

              <div className="tags">
                <span>React</span>
                <span>UI Design</span>
                <span>MongoDB</span>
              </div>
            </div>

          </div>

        </section>

        {/* Main Actions */}
        <section className="dashboard-section">

          <h2>Learning Activities</h2>

          <div className="activity-grid">

            <Link to="/partners" className="activity-card">
              <span>🤝</span>
              <div>
                <h3>Find Learning Partners</h3>
                <p>Discover students who match your learning needs.</p>
              </div>
            </Link>

            <Link to="/sessions" className="activity-card">
              <span>📅</span>
              <div>
                <h3>My Sessions</h3>
                <p>View and manage your upcoming learning sessions.</p>
              </div>
            </Link>

            <Link to="/resources" className="activity-card">
              <span>📖</span>
              <div>
                <h3>Shared Resources</h3>
                <p>Access notes, links and learning materials.</p>
              </div>
            </Link>

            <Link to="/reviews" className="activity-card">
              <span>⭐</span>
              <div>
                <h3>Reviews & Badges</h3>
                <p>View your peer feedback and earned badges.</p>
              </div>
            </Link>

          </div>

        </section>

        {/* Upcoming Sessions */}
        <section className="dashboard-section">

          <div className="section-heading">
            <h2>Upcoming Sessions</h2>
            <Link to="/sessions">View All</Link>
          </div>

          <div className="empty-session">
            <div>📅</div>
            <h3>No upcoming sessions</h3>
            <p>
              Find a learning partner and schedule your first session.
            </p>

            <Link to="/partners" className="primary-btn">
              Find Partners
            </Link>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;