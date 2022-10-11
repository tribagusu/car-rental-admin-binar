const FormLogin = (props) => {
  const { email, password, setEmail, setPassword, handleSubmit } = props

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <div className="signin-email">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          autoComplete="off"
          required
        />
      </div>
      <div className="signin-password">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
        />
      </div>
      <button className="btn-primary">Sign In</button>
    </form>
  )
}

export default FormLogin
