import { Link } from "react-router-dom"
import cover from "../assets/cover-login.png"

const SignIn = (props) => {
  const { handleEmail, handlePassword, email, password, handleSubmit } = props

  return (
    <>
      <div className="signin">
        <div className="left">
          <div className="signin-right-image">
            <img src={cover} alt="cover-login" />
          </div>
        </div>
        <div className="right">
          <div className="signin-container">
            <div className="logo">
              <Link to="/">
                <h3>BCR LOGO</h3>
              </Link>
            </div>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
              <div className="signin-email">
                <label>Email</label>
                <input onChange={handleEmail} value={email} type="text" />
              </div>
              <div className="signin-password">
                <label>Password</label>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                />
              </div>
              <button className="btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
