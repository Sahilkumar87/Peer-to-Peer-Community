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
            <label>College ID</label>
            <input
              type="email"
              placeholder="Enter your college id"
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