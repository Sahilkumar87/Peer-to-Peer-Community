import { Link } from "react-router-dom";

function Sessions() {
  return (
    <div className="sessions-page">

      <nav className="dashboard-nav">
        <div className="logo">SkillExchange</div>

        <div className="dashboard-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <main className="sessions-main">

        <div className="sessions-heading">
          <p className="small-title">SESSION PLANNER</p>
          <h1>My Sessions</h1>
          <p>
            Manage learning requests and schedule your peer learning sessions.
          </p>
        </div>

        {/* Requests */}
        <section className="session-section">
          <div className="section-heading">
            <h2>Learning Requests</h2>
            <span className="request-count">2 Requests</span>
          </div>

          <div className="request-list">

            <div className="request-card">
              <div className="request-user">
                <div className="avatar">A</div>

                <div>
                  <h3>Aman Sharma</h3>
                  <p>Wants to learn DSA from you</p>
                </div>
              </div>

              <div className="request-actions">
                <button className="accept-btn">Accept</button>
                <button className="decline-btn">Decline</button>
              </div>
            </div>

            <div className="request-card">
              <div className="request-user">
                <div className="avatar">P</div>

                <div>
                  <h3>Priya Singh</h3>
                  <p>Wants to learn JavaScript from you</p>
                </div>
              </div>

              <div className="request-actions">
                <button className="accept-btn">Accept</button>
                <button className="decline-btn">Decline</button>
              </div>
            </div>

          </div>
        </section>

        {/* Upcoming Sessions */}
        <section className="session-section">

          <div className="section-heading">
            <h2>Upcoming Sessions</h2>
            <span className="request-count">2 Sessions</span>
          </div>

          <div className="upcoming-grid">

            <div className="session-card">

              <div className="session-date">
                <strong>15</strong>
                <span>OCT</span>
              </div>

              <div className="session-info">
                <h3>React Learning Session</h3>
                <p>With Rahul Verma</p>
                <p>🕐 5:00 PM - 6:00 PM</p>
              </div>

              <button className="session-btn">
                View Details
              </button>

            </div>

            <div className="session-card">

              <div className="session-date">
                <strong>18</strong>
                <span>OCT</span>
              </div>

              <div className="session-info">
                <h3>DSA Practice Session</h3>
                <p>With Aman Sharma</p>
                <p>🕐 6:00 PM - 7:00 PM</p>
              </div>

              <button className="session-btn">
                View Details
              </button>

            </div>

          </div>

        </section>

        {/* Schedule */}
        <section className="schedule-box">
          <div>
            <h2>Schedule a New Session</h2>
            <p>
              Select a learning partner and plan your next session.
            </p>
          </div>

          <button className="primary-btn">
            + Schedule Session
          </button>
        </section>

      </main>
    </div>
  );
}

export default Sessions;