const FormLogin = (props) => {
  const { email, password, handleEmail, handlePassword, handleSubmit } = props

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <div className="signin-email">
        <label>Email</label>
        <input onChange={handleEmail} value={email} type="text" />
      </div>
      <div className="signin-password">
        <label>Password</label>
        <input onChange={handlePassword} value={password} type="password" />
      </div>
      <button className="btn-primary">Sign In</button>
    </form>
  )
}

export default FormLogin
