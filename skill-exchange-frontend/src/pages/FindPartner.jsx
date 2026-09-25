import { Link } from "react-router-dom";

function FindPartner() {
  const partners = [
    {
      name: "Aman Sharma",
      teach: ["React", "JavaScript"],
      learn: ["DSA"],
      level: "Intermediate",
      availability: "Weekend",
    },
    {
      name: "Rahul Verma",
      teach: ["DSA", "Java"],
      learn: ["React"],
      level: "Advanced",
      availability: "Weekday Evening",
    },
    {
      name: "Priya Singh",
      teach: ["UI Design", "Figma"],
      learn: ["React"],
      level: "Intermediate",
      availability: "Flexible",
    },
  ];

  return (
    <div className="partners-page">

      <nav className="dashboard-nav">
        <div className="logo">SkillExchange</div>

        <div className="dashboard-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <main className="partners-main">

        <div className="partners-heading">
          <p className="small-title">SKILL MATCHING</p>
          <h1>Find Learning Partners</h1>
          <p>
            Discover students who can teach the skills you want to learn.
          </p>
        </div>

        {/* Search */}
        <div className="partner-search">
          <input
            type="text"
            placeholder="Search by skill, e.g. React, DSA, UI Design..."
          />

          <button className="primary-btn">
            Search
          </button>
        </div>

        {/* Matching Info */}
        <div className="matching-info">
          <span>🎯</span>
          <div>
            <h3>Simple Skill Matching</h3>
            <p>
              Partners are matched based on skills they can teach and
              skills you want to learn.
            </p>
          </div>
        </div>

        {/* Partners */}
        <section className="partners-section">

          <div className="partners-count">
            <h2>Suggested Partners</h2>
            <span>{partners.length} students found</span>
          </div>

          <div className="partner-grid">

            {partners.map((partner, index) => (
              <div className="partner-card" key={index}>

                <div className="partner-top">
                  <div className="avatar">
                    {partner.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{partner.name}</h3>
                    <p>{partner.level}</p>
                  </div>
                </div>

                <div className="partner-detail">
                  <h4>Can Teach</h4>

                  <div className="tags">
                    {partner.teach.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="partner-detail">
                  <h4>Wants to Learn</h4>

                  <div className="tags">
                    {partner.learn.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="availability">
                  📅 {partner.availability}
                </div>

                <button className="request-btn">
                  Send Learning Request
                </button>

              </div>
            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default FindPartner;