import googleLogo from "./../../img/google.png";
import facebookLogo from "./../../img/facebook.png";
import Input from "../../utils/Input";
import { useState } from "react";
import { loginUser } from "../../apis/user";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const loginHandle = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("Email is not Valid");
    }
    const addData = async () => {
      const inputValue = {
        email: email,
        password: password,
      };
      const response = await loginUser(inputValue);
      const x = response.json();
      if (response.status !== 200) {
        alert(x.response);
        console.log(x);
        console.log(x.response);
      } else {
        navigate("/home");
      }
    };
    addData();
  };
  return (
    <div className="main-div">
      <div className="login-form">
        <div className="login-text">log in with</div>
        <div className="google-facebook">
          <button className="face-goo-box">
            <img src={googleLogo} alt="" />
            <div className="face-goo-text">Google</div>
          </button>
          <button className="face-goo-box">
            <img src={facebookLogo} alt="" />
            <div className="face-goo-text">Facebook</div>
          </button>
        </div>
        <div className="or">or</div>
        <form className="form" onSubmit={loginHandle}>
          <div className="label-input-div">
            <div className="label-input-text">Email</div>
            <input
              className="form-input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="label-input-password-div">
            <div className="label-input-text">Password</div>

            <input
              className="form-input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <input className="submit-button" type="submit" value="Log In" />
        </form>
        {/* <div>
        <Input value={email} labe />
        <div></div>
        <div></div>
      </div> */}
      </div>
      <div className="sign-up-div">
        <div>
          Don't have an account?{" "}
          <a className="a-sign-up" href="/register">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
