import { Link } from 'react-router-dom';
import '../styles/loginRegister.css';

function CustomerRegistration() {
  return (
    <div className="app-bg-register vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ minWidth: '350px', minHeight: '400px' }}>
        <h3 className="text-center text-white mb-3">Register</h3>

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
            <button type="button" className="btn btn-warning text-white">
              Register
            </button>

            {/* Already have an account? Login */}
            <div className="text-center mt-2">
              <span className="text-white">Already have an account? </span>
              <Link
                to="/login"
                className="text-danger text-decoration-none"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerRegistration;
