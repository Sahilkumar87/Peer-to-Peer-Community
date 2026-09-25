import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card login-card">

        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Login to continue your learning journey</p>
        </div>

        <form>

          <div className="form-group">
            <label>College Email</label>
            <input
              type="email"
              placeholder="Enter your college email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Login;