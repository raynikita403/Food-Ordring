import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/loginRegister.css';

function CustomerLogin() {
  const navigate = useNavigate(); // Initialize navigate

  // Example login handler
  const handleLogin = () => {
    // TODO: Add actual login logic here (validate email/password)
    // After successful login, navigate to Home page
    navigate('/');
  };

  return (
    <div className="app-bg vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ minWidth: '350px', minHeight: '400px' }}>
        <h3 className="text-center text-white mb-3">Login</h3>

        <form>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="d-grid mt-4">
           <button
        type="button"
        className="btn btn-warning text-white"
        onClick={() => navigate("/", { replace: true })} // Navigate to Home for just now .......!!
        >
  Login
</button>

    
           <div className="text-center mt-2">
          <span className="text-white">Don't have an account? </span>
          <Link
          to="/register"
          className="text-danger text-decoration-none"
          >
          Create Account
        </Link>
        </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;
