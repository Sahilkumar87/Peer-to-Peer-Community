import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join the peer-to-peer learning community</p>
        </div>

        <form>

          {/* Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>College Email</label>
            <input
              type="email"
              placeholder="Enter your college email"
            />
          </div>

          {/* Password */}
          <div className="form-row">

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create password"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
              />
            </div>

          </div>

          {/* Skills */}
          <div className="form-group">
            <label>Skills I Can Teach</label>
            <input
              type="text"
              placeholder="Example: DSA, Video Editing"
            />
          </div>

          <div className="form-group">
            <label>Skills I Want to Learn</label>
            <input
              type="text"
              placeholder="Example: React, UI Design"
            />
          </div>

          {/* Experience */}
          <div className="form-group">
            <label>Experience Level</label>

            <select>
              <option value="">Select experience level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* Availability */}
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

          <button type="submit" className="auth-btn">
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Register;