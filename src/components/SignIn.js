import { Link } from "react-router-dom"
import cover from "../assets/cover-login.png"

// components
import FormLogin from "./FormLogin"
import ErrorLoginCard from "./Card/ErrorLoginCard"

const SignIn = (props) => {
  const { errMsg } = props

  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
