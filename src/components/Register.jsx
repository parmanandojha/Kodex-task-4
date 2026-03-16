/* Register.jsx */
function Register({ setToggle }) {
  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div className="form-body">
      <form className="form">
        <div className="field">
          <label htmlFor="register-name" className="field-label">
            Full Name
          </label>
          <input
            id="register-name"
            type="text"
            required
            className="field-input"
            placeholder="John Doe"
          />
        </div>

        <div className="field">
          <label htmlFor="register-email" className="field-label">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            required
            className="field-input"
            placeholder="you@example.com"
          />
        </div>

        <div className="field">
          <label htmlFor="register-password" className="field-label">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            required
            className="field-input"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="primary-button">
          Sign up
        </button>
      </form>

      <p className="form-footer-text">
        Already have an account?{' '}
        <button
          type="button"
          onClick={handleToggle}
          className="form-footer-link"
        >
          Sign in
        </button>
      </p>
    </div>
  )
}

export default Register

