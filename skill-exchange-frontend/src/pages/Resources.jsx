import { Link } from "react-router-dom";

function Resources() {
  return (
    <div className="resources-page">

      <nav className="dashboard-nav">
        <div className="logo">SkillExchange</div>

        <div className="dashboard-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <main className="resources-main">

        <div className="resources-heading">
          <p className="small-title">KNOWLEDGE SHARING</p>
          <h1>Shared Notes & Resources</h1>
          <p>
            Share useful notes, links and learning materials with your peers.
          </p>
        </div>

        {/* Add Resource */}
        <section className="resource-add">

          <div>
            <h2>Share a Resource</h2>
            <p>Add notes, useful links or study material.</p>
          </div>

          <button className="primary-btn">
            + Add Resource
          </button>

        </section>

        {/* Resources */}
        <section className="resources-section">

          <div className="section-heading">
            <h2>My Shared Resources</h2>
            <span>3 Resources</span>
          </div>

          <div className="resource-grid">

            <div className="resource-card">
              <div className="resource-icon">📄</div>

              <div className="resource-content">
                <h3>DSA Notes</h3>
                <p>
                  Important data structures and algorithms notes for beginners.
                </p>

                <div className="resource-meta">
                  <span>📚 DSA</span>
                  <span>Shared by You</span>
                </div>

                <button className="resource-btn">
                  View Resource
                </button>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🔗</div>

              <div className="resource-content">
                <h3>React Learning Guide</h3>
                <p>
                  Useful React documentation and beginner learning resources.
                </p>

                <div className="resource-meta">
                  <span>⚛️ React</span>
                  <span>Shared by Rahul</span>
                </div>

                <button className="resource-btn">
                  Open Link
                </button>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">📝</div>

              <div className="resource-content">
                <h3>JavaScript Practice Questions</h3>
                <p>
                  Practice questions for improving JavaScript fundamentals.
                </p>

                <div className="resource-meta">
                  <span>💻 JavaScript</span>
                  <span>Shared by Aman</span>
                </div>

                <button className="resource-btn">
                  View Resource
                </button>
              </div>
            </div>

          </div>

        </section>

        {/* Session Notes */}
        <section className="notes-section">

          <h2>Session Notes</h2>

          <div className="notes-box">
            <div className="note-icon">📖</div>

            <div>
              <h3>React Learning Session</h3>
              <p>
                Notes from your recent learning session with Rahul.
              </p>
            </div>

            <button className="resource-btn">
              View Notes
            </button>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Resources;