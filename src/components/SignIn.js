import { Link } from "react-router-dom"

const SignIn = (props) => {
  const { handleEmail, handlePassword, email, password, handleSubmit } = props

  return (
    <>
      <div className="signin">
        <div className="left">
          <div className="signin-container">
            <div className="logo">
              <Link to="/">
                <h3>BCR LOGO</h3>
              </Link>
            </div>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
              <div className="signin-email">
                <div className="label">
                  <label>Email</label>
                </div>
                <input onChange={handleEmail} value={email} type="text" />
              </div>
              <div className="signin-password">
                <div className="signin-label">
                  <label>Password</label>
                </div>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                />
              </div>
              <button className="btn">Sign In</button>
            </form>
            <div className="signin-signup">
              <p>Don't have an account?</p>
              <Link to="/registration">Sign Up for free</Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="signin-right-logo">
            <h1>Binar Car Rental</h1>
          </div>
          <div className="signin-right-image">
            <img src="" alt="image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
