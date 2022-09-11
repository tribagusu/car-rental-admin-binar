import { Link } from "react-router-dom"
import cover from "../assets/cover-login.png"

// components
import FormLogin from "./FormLogin"

const SignIn = (props) => {
  return (
    <>
      <div className="signin">
        <div className="left">
          <img src={cover} alt="cover-login" />
        </div>
        <div className="right">
          <div className="signin-container">
            <div className="logo">
              <Link to="/">
                <h3>BCR LOGO</h3>
              </Link>
            </div>
            <h2>Welcome Admin BCR!</h2>
            <FormLogin {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
