import { Link } from "react-router-dom"
import cover from "../assets/cover-login.png"
import { useState, useEffect } from "react"

// components
import FormLogin from "./FormLogin"
import WarningLoginCard from "./Card/WarningLoginCard"

const SignIn = (props) => {
  const { isLoggedIn } = props
  //   const [isLoggedIn, setIsLoggedIn] = useState(false)

  //   useEffect(() => {
  //     const user = localStorage.getItem("token")
  //     if (user) {
  //       setIsLoggedIn(true)
  //     }
  //   }, [])

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
            {!isLoggedIn && <WarningLoginCard />}
            <FormLogin {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
