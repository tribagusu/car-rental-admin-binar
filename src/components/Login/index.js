import { Link } from "react-router-dom"
import cover from "../../assets/cover-login.png"

// components
import FormLogin from "./FormLogin"
import ErrorLoginCard from "./ErrorLoginCard"

const Login = (props) => {
  const { errMsg, logging } = props

  return (
    <div className="signin">
      <div className="left">
        <img src={cover} alt="cover-login" />
      </div>
      <div className="right df-center">
        <div className="signin-container df-center">
          <div className="logo">
            <Link to="/">
              <h3>BCR LOGO</h3>
            </Link>
          </div>
          <h2>Welcome Admin BCR!</h2>
          {errMsg && <ErrorLoginCard />}
          <FormLogin {...props} />
          {logging && !errMsg && (
            <div>
              <p>Signing...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
