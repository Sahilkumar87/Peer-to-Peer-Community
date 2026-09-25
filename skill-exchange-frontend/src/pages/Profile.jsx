import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile-page">

      {/* Navbar */}
      <nav className="dashboard-nav">
        <div className="logo">SkillExchange</div>

        <div className="dashboard-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <main className="profile-main">

        <div className="profile-heading">
          <p className="small-title">YOUR PROFILE</p>
          <h1>Complete Your Profile</h1>
          <p>
            Add your skills and availability to find suitable learning partners.
          </p>
        </div>

        <form className="profile-form">

          {/* Basic Information */}
          <section className="profile-section">
            <h2>Basic Information</h2>

            <div className="profile-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>College / University</label>
                <input
                  type="text"
                  placeholder="Enter college name"
                />
              </div>

            </div>

            <div className="form-group">
              <label>About You</label>
              <textarea
                placeholder="Tell something about yourself..."
                rows="4"
              ></textarea>
            </div>
          </section>

          {/* Skills */}
          <section className="profile-section">
            <h2>Skills</h2>

            <div className="form-group">
              <label>Skills I Can Teach</label>
              <input
                type="text"
                placeholder="Example: DSA, Java, Video Editing"
              />
              <small>
                Enter skills you are comfortable teaching to other students.
              </small>
            </div>

            <div className="form-group">
              <label>Skills I Want to Learn</label>
              <input
                type="text"
                placeholder="Example: React, UI Design, MongoDB"
              />
              <small>
                Enter skills you want to learn from other students.
              </small>
            </div>
          </section>

          {/* Experience */}
          <section className="profile-section">
            <h2>Experience & Availability</h2>

            <div className="profile-grid">

              <div className="form-group">
                <label>Experience Level</label>

                <select>
                  <option value="">Select level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label>Availability</label>

                <select>
                  <option value="">Select availability</option>
                  <option>Weekday Morning</option>
                  <option>Weekday Evening</option>
                  <option>Weekend</option>
                  <option>Flexible</option>
                </select>
              </div>

            </div>
          </section>

          <div className="profile-actions">
            <Link to="/dashboard" className="cancel-btn">
              Cancel
            </Link>

            <button type="submit" className="primary-btn">
              Save Profile
            </button>
          </div>

        </form>

      </main>
    </div>
  );
}

export default Profile;