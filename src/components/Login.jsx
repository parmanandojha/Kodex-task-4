/* Login.jsx */
function Login({ setToggle }) {
  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div className="form-body">
      <form className="form">
        <div className="field">
          <label htmlFor="login-email" className="field-label">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            className="field-input"
            placeholder="you@example.com"
          />
        </div>

        <div className="field">
          <label htmlFor="login-password" className="field-label">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            required
            className="field-input"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="primary-button">
          Sign in
        </button>
      </form>

      <p className="form-footer-text">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={handleToggle}
          className="form-footer-link"
        >
          Sign up
        </button>
      </p>
    </div>
  )
}

export default Login

