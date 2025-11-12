import React from 'react';

const SignInForm = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="card shadow p-4" style={{ minWidth: '350px' }}>
      <h2 className="text-center text-primary mb-4">Sign In</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
      </form>
    </div>
  </div>
);

export default SignInForm;
